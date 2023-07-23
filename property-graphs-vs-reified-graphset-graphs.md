---
layout: page
title: 'Property graphs vs. reified graphset-graphs'
date: '2022-03-09'
last_modified_at: '2022-03-09'
published: true
code: true
note: true
gallery_img: property-graphs-vs-reified-graphset-graphs.png
excerpt: |
  This essay presents some ideas on the limitations of property graphs, and outlines a new, more general model which I call 'reified graphset-graphs'.
---

This essay presents some ideas on the limitations of property graphs, and outlines a new, more general model which I call 'reified graphset-graphs'.

* Table of Contents
{:toc}

### Property graphs and their limitations

Property graphs can be described as "directed, labeled, attributed, multi-graph[s]"[^rodriguez], meaning they are graphs whose edges have a start and end, like an arrow (directed); their vertices and edges each have a set through which one or more labels can be associated with them, and these labels may be identifiers, a type, or some other data (labelled); their vertices and edges each have a map, dictionary, or function associated with them which allows attaching arbitrary key-value (meta)data to them (attributed); and any given pair of vertices may share multiple edges with the same direction, and possibly label (multigraph). Usually property graphs also lack certain other features such as edges that cover more than two vertices (hyperedges); and vertices which can contain other vertices or subgraphs (hypervertices, or hypernodes[^levene]). As an example, Figure 1 presents a typical property graph representation of some UK Prime Ministers, albeit without any edge attributes.

{% include fig.html
  src='assets/img/property_graphs_vs_reified_supergraphs_1.svg'
  style='max-width: 300px;'
  n=1
  alt='A property graph representation of two Prime Ministers (PMs) of the United Kingdom. A node `pm1` represents Theresa May and a node `pm2` represent Boris Johnson. Each PM is associated to a vertex representing the Conservative Party, and each PM is associated to a premiership vertex which holds attributes for the year they assumed and vacated their office.' %}

Property graphs are ubiquitous among graph database implementations, prominent examples including Neo4j and RedisGraph. The combination of labels and attributes with the directed graph provides a multi-paradigm database which blends in some of the convenience of a document database. However, the property graph model has several drawbacks which arise from this choice of convenience over a purer or more minimalistic model.

First, the user has multiple choices in how vertex metadata can be structured. In the example of Figure 1, we have chosen to store the `first-name` and `last-name` as attributes on the `pm` vertices, and to store the `party` as a relation via an edge of the same label. If we assume that the users of this graph will want to query for individuals who are connected via parties then this is quite a sensible model, but we do not always know how a graph will be queried or read at the time when it is constructed or written. As another example, we could have stored the start and end year for each `Politician`s premiership as vertex attributes on the politicians themselves, but instead we have reified[^reification] these facts and represented them as `Premiership` vertices. Attribute-to-vertex reification allow for the possibility of many-to-many relationships between `Premiership`s and `Politician`s, such as in the case when one `Politician` serves multiple `Premiership`s. Usually graphs change over time and relationships such as these are gradually reified as the need arises to capture additional metadata; to capture additional relationships; or to handle many-to-many relationships. Unfortunately these graph refactorings can induce errors in the graph; and be costly to undertake due to the need to update code which interacts with the graph.

Second, the user has limited choices in how edge metadata can be structured. With a vertex, additional metadata can always be added through new edges pointing at other relevant vertices, but it is not possible to add an edge to an edge, and the only ways to provide additional metadata to an existing edge are to reify the relationship as a vertex (edge-to-vertex reification); or to store the metadata as attributes.

Third, although the property graph is able to represent hyperedges (by reifying the edge as a vertex) and set-hypervertices (by creating a vertex to represent the hypervertex which has edges to all of the vertices in its set), it is not able to represent arbitrary graph-hypervertices, which would be vertices which can contain both vertices and edges. This is because of the preceding limitation on attaching metadata to edges. To model graph-hypervertices in a property graph would require that each edge had an attribute or label for each hypervertex it was a part of, to allow determining if which hypervertices that edge was part of. This is quite problematic because not only are hypervertices useful for representing hierarchical data and concepts, but they also allow attaching metadata to subgraphs, as I will discuss later.

Fourth, both vertex labels and vertex attributes are redundant features. Vertex labels are a strict subset of vertex attributes. A vertex label can be implemented as a vertex attribute whose key corresponds to the label, and whose value is `true` or some other trivial constant. Vertex attributes are simply key-value stores or functions, and thus they are just bipartite graphs. Any data which can be stored in a vertex attribute can be stored in the graph itself, and as previously discussed this reification often provides benefits to the users of the graph. The presence of vertex attributes and vertex labels as distinct features may be useful for partitioning data to optimise certain queries and transformations, but this comes at the cost of inflexibility and inelegance in the graph model.

### Reified graphset-graphs

To fix these issues, we need a new graph model which removes vertex labels and vertex attributes; reifies all edges as vertices; and supports (graph-)hypervertices. Mandatory reification of all edges further allows us to eliminate edge labels and edge attributes. However, this presents a new issue in that it will no longer be possible to deduplicate vertices which represent edges without making it impossible to determine the start and end vertices of these edges. Figure 2 demonstrates this problem: if `pm1` and `pm2` both have `first-name` edges, then if we reify both of these via a single `first-name` edge-vertex, it becomes impossible to determine which name corresponds to each person!

{% include fig.html
  src='assets/img/property_graphs_vs_reified_supergraphs_2.svg'
  style='max-width: 300px;'
  n=2
  alt="A graph of Prime Minister's first names, where the `first-name` relation has been reified to a vertex and deduplicated. This makes it impossible to determine which name corresponds to which person." %}

Fortunately, it is possible to solve this problem using hypervertices. Figure 3 shows the same graph as Figure 2, with a single `first-name` edge-vertex, except now we also have two hypervertices, each of which contains a single person and a single name. Each hypervertex specifies a subgraph in which the true relationship is clear.

{% include fig.html
  src='assets/img/property_graphs_vs_reified_supergraphs_3.svg'
  style='max-width: 300px;'
  n=3
  alt='By augmenting the graph in Figure 2 with hypervertices, we are able to demarcate semantically valid subgraphs and represent the first name of each Prime Minister without ambiguity.' %}

The resulting model is a directed, unlabelled, unattributed, non-multigraph[^non-multigraph], with hypervertices, and without hyperedges. It is through the use of hypervertices that we are able to implement features such as attributes and labels. Hypervertices can be seen simply as explicit subgraphs: the graph in Figure 3 could be split into two graphs, one for each hypervertex, and each representing the `first-name` relationship for each Prime Minister.

Because the hypervertices are simply subgraphs, we can represent such a graph $$G$$ as a set of all of these subgraphs/hypervertices $$SG_i$$. If $$\bar{G} = \{ SG_i = (V_i, E_i) \mid SG_i \text{ is a graph} \}$$ then $$G = (\bar{G} \cup \bigcup V_i, \bigcup E_i)$$. A set of graphs can be called a _graphset_ and so I refer to graphs such as $$G$$ as _reified graphset-graphs_, i.e. graphs which are constructed from the union of a set of subgraphs (graphset-graphs), and which embed the underlying set of subgraphs into the resulting supergraph as hypervertices (reified).

### The benefits of hypervertices

Hypervertices do not just solve the aforementioned disambiguation problem, they also enable us to achieve many other outcomes from our graphs.

First, hypervertices allow the modelling of containment relations and structural data. In the case of the Prime Ministers example used thus far, we could construct a hypervertex to contain all of the attribute relations for each person and then associate these to the respective `pm` vertices. We could go further and consider this hypervertex of attribute key-value pairs as a complete replacement for the other nodes. This use of hypervertices for representing structural, multilevel, or nested data is given treatment in the papers documenting Levene and Poulovassilis's "Hypernode" model[^levene], and Angles' "Nested Graph" model[^angles].

Second, hypervertices can be used for contextualisation and to draw attention to particular subsets of a graph. This can be useful when a graph is very large, and allow users to embed hints about how the graph can be used directly in the graph itself. Users can freely record any subgraph with semantic significance as a hypervertex, and associate metadata to this hypervertex.

Third, building on contextualisation, hypervertices allow users to record their interactions with the graph. If a user visits a sequence of vertices; runs a query which returns a subgraph; or inserts new data, all of these interactions can be recorded as a new hypervertex around the relevant vertices and edges. Thus graph databases which support hypervertices allow themselves to be their own query logs and audit trails.

Unfortunately, the only papers I have found so far which discuss graph models for databases making use of hypervertices are the "Hypernode" model[^levene] and the "Nested Graph" model[^angles]. The differences with the reified graphset-graph model are that in the "Hypernode" model, hypernodes/hypervertices have (unique) labels; and in the "Nested Graph" model, edges have labels. Given the additional capabilities afforded by hypervertices I hope they become available in a production-ready database package.

### References and footnotes

[^angles]: Angles, Renzo. ‘A Nested Graph Model for Visualizing RDF Data’. In Proceedings of the 3rd Alberto Mendelzon International Workshop on Foundations of Data Management. Arequipa, Peru, 2009. <http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.159.5254>.

[^levene]: Levene, M., and A. Poulovassilis. ‘The Hypernode Model and Its Associated Query Language’. In Proceedings of the 5th Jerusalem Conference on Information Technology, 1990. ‘Next Decade in Information Technology’, 520–30, 1990. <https://doi.org/10.1109/JCIT.1990.128324>.

[^reification]: ‘Reification (Computer Science)’. In Wikipedia, 11 May 2020. <https://en.wikipedia.org/w/index.php?title=Reification_(computer_science)&oldid=956141410>.

[^rodriguez]: Rodriguez, Marko A., and Peter Neubauer. ‘Constructions from Dots and Lines’. Bulletin of the American Society for Information Science and Technology 36, no. 6 (2010): 35–41. <https://doi.org/10.1002/bult.2010.1720360610>.

[^non-multigraph]: I assume that there is no need to create multiple edges of the same direction between the same pair of vertices, because any information captured by the count of the edges could trivially be encoded in the graph. However, the non-multigraph constraint is not necessary to construct reified graphset-graphs, and an alternative 'reified graphset-multigraphs' formulation could be built instead if desired.



<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-chtml.min.js" integrity="sha512-93xLZnNMlYI6xaQPf/cSdXoBZ23DThX7VehiGJJXB76HTTalQKPC5CIHuFX8dlQ5yzt6baBQRJ4sDXhzpojRJA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
