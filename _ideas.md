---
published: false
draft: true
---

# Ethical imperativism

# NFTs without Blockchains

# One Representation to Rule Them All?

Thinking after [[property-graphs-vs-reified-graphset-graphs]], the reified graphset-graph is not sufficient to represent e.g. an AST, because we want to have two nodes with the same 'identity'.

Consider a chart displaying a regression with data points and credible intervals. We could represent this as a table or a graph but it's not useful! The representation and rendering of information is an essential component of how humans can understand and apply it.

This entails accessibility issues: if someone has aphantasia or blindness, how do we best represent information/data?

Is there a single 'language' we can use to: unambiguously represent data/information; in a way that is intuitive to humans; and has semantics allowing computers to operate on it?

Need to deconstruct the semantics of various existing representations, find commonalities, and then construct a new language for both describing a representation, and specifying the semantics associated with each element of that representation.

Notations are (semi-)formal methods for reifying abstract concepts. Notational elements are the components of a notation and the rules for composing them. Concepts are 'stuff in your head' ???. Representations are instances of notations which bind notational elements to concepts, and provide a way for individuals to communicate ideas through an agreed relationship between concepts and notational elements.

```{graphviz}
graph G {
    rankdir=LR;

    # Notations
    "Graph", "Scatterplot", "Bar chart", "Natural language", "Source code",
    "Mathematics" [color=red]

    # Notational Elements
    Vertex, "Edge", "Horizontal position", Hierarchy, "Edge direction",
    "Vertical position", Point, "Regression line", Axis,
    "Credibility interval", Word, Sentence, Noun, Verb, Adjective,
    Paragraph [color=orange]

    Word -- {Noun, Verb, Adjective} [style=dotted, dir=back]

    ## Mandatory elements
    "Graph" -- {Vertex, "Edge", Point}
    "Scatterplot" -- {Axis, "Horizontal position", "Vertical position"}
    "Bar chart" -- {Axis, "Horizontal position", "Vertical position"}
    "Natural language" -- {Word, Sentence, Noun, Verb, Adjective}

    ## Optional elements
    edge [style=dashed]

    "Graph" -- {"Horizontal position", Hierarchy, "Edge direction"}
    "Scatterplot" -- {"Regression line", "Credibility interval"}
    "Natural language" -- Paragraph

    edge [style=solid]

    # Concepts
    Expressions, "Order of operations", Parameters, "Order of parameters",
    Literals, Number, Category, Relationship, Correlation, Estimate,
    "Parameter range", Mean, Difference, "Difference vs mean", Thing,
    Description, Action, Story [color=blue]

    Relationship -- "Difference vs mean" [style=dotted, dir=back]

    # Representations
    subgraph cluster_AST {
        color=green
        label=AST

        Vertex -- {Expressions, Parameters, Literals}
        "Horizontal position" -- "Order of parameters"
        {"Edge direction", Hierarchy} -- "Order of operations"
    }

    subgraph cluster_bland_altman {
        color=green
        label="Bland-Altman plot"

        Axis -- {Mean, Difference}
        "Vertical position" -- Difference
        "Horizontal position" -- Mean
        Point -- "Difference vs mean"
    }

    subgraph cluster_language {
        color=green
        label="Language ????"

        Noun -- Thing
        Adjective -- Description
        Verb -- Action
    }
}
```
