---
layout: page
title: 'Property graphs vs. reified supergraphs'
date: '2022-03-07'
last_modified_at: '2022-03-07'
published: false
---

Property graphs can be described as "directed, labeled, attributed, multi-graph[s]"[^rodriguez], meaning they are graphs whose edges have a start and end, like an arrow (directed); their vertices and edges each have a set through which one or more labels can be associated with them, and these labels may be identifiers, a type, or some other data (labelled); their vertices and edges each have a map, dictionary, or function associated with them which allows attaching arbitrary key-value (meta)data to them (attributed); and any given pair of vertices may share multiple edges with the same direction, and possibly label (multigraph). Usually property graphs also lack certain other features such as edges that cover more than two vertices (hyperedges); and vertices which can contain other vertices or subgraphs (hypervertices, or hypernodes[^levene]). As an example, Figure 1 presents a typical property graph representation of some UK Prime Ministers, albeit without any edge attributes.

{% include fig.html
  src='assets/img/property_graphs_vs_reified_supergraphs_1.svg'
  style='max-width: 300px;'
  n=1
  alt='A property graph representation of two Prime Ministers (PMs) of the United Kingdom. A node `pm1` represents Theresa May and a node `pm2` represent Boris Johnson. Each PM is associated to a vertex representing the Conservative Party, and each PM is associated to a premiership vertex which holds attributes for the year they assumed and vacated their office.' %}

Property graphs are ubiquitous among graph database implementations, prominent examples being Neo4j and RedisGraph. The combination of labels and attributes with the directed graph provides a multi-paradigm database which blends in some of the convenience of a document database. However, the property graph model has several drawbacks which arise from this choice of convenience over a purer or more minimalistic model.

First, the user has multiple choices in how vertex metadata can be structured. In the example of Figure 1, we have chosen to store the `first-name` and `last-name` as attributes on the `pm` vertices, and to store the `party` as a relation via an edge of the same label. If we assume that the users of this graph will want to query for individuals who are connected via parties then this is quite a sensible model, but we do not always know how a graph will be queried or read at the time when it is constructed or written. As another example, we could have stored the start and end year for each `Politician`s premiership as vertex attributes, but instead we have reified[^reification] this and represented these facts as `Premiership` vertices. This allow for the possibility of many-to-many relationships between `Premiership`s and `Politician`s, such as in the case when one `Politician` serves multiple `Premiership`s. Usually graphs change over time and relationships such as these are gradually reified as the need to capture additional metadata; to capture additional relationships; or to handle many-to-many relationships arises. Unfortunately these graph refactorings can induce errors in the graph; and be costly to undertake due to the need to update code which interacts with the graph.

Second, the user has limited choices in how edge metadata can be structured. With a vertex, additional metadata can always be added through new edges pointing at other relevant vertices, but it is not possible to add an edge to an edge, and the only ways to provide additional metadata to an existing edge are to reify the relationship as a vertex; or to store the metadata as attributes.

Third, although the property graph is able to represent hyperedges (by reifying the edge as a vertex) and set-hypervertices (by creating a vertex to represent the hypervertex which has edges to all of the vertices in its set), it is not able to represent arbitrary graph-hypervertices, which would be vertices which can contain both vertices and edges. This is because of the preceding limitation on attaching metadata to edges. The property graph model would require that each edge had an attribute or label for each hypervertex it was a part of, to allow determining if that edge was part of that hypervertex. This is quite problematic because not only are hypervertices useful for representing hierarchical data and concepts, but they also allow the graph to capture data about itself. If we query the graph and get a subgraph as a result, how should I record this result, and how can I attach metadata to this query-subgraph such as the time at which it was executed?

Fourth, both vertex labels and vertex attributes are redundant features. Vertex labels are a strict subset of vertex attributes. A vertex label can be implemented as a vertex attribute whose key corresponds to the label, and whose value is `true` or some other trivial constant. Vertex attributes are simply key-value stores or functions, and thus they are just bipartite graphs. Any data which can be stored in a vertex attribute can be stored in the graph itself, and as previously discussed this often provides benefits to the users of the graph. The presence of vertex attributes and vertex labels as distinct features may be useful for partitioning data to optimise certain queries and transformations, but this comes at the cost of inflexibility and inelegance in the graph model.





### References

[^levene]: Levene, M., and A. Poulovassilis. ‘The Hypernode Model and Its Associated Query Language’. In Proceedings of the 5th Jerusalem Conference on Information Technology, 1990. ‘Next Decade in Information Technology’, 520–30, 1990. <https://doi.org/10.1109/JCIT.1990.128324>.

[^rodriguez]: Rodriguez, Marko A., and Peter Neubauer. ‘Constructions from Dots and Lines’. Bulletin of the American Society for Information Science and Technology 36, no. 6 (2010): 35–41. <https://doi.org/10.1002/bult.2010.1720360610>.

[^reification]: ‘Reification (Computer Science)’. In Wikipedia, 11 May 2020. <https://en.wikipedia.org/w/index.php?title=Reification_(computer_science)&oldid=956141410>.
