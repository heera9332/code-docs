# Graph and search algorithms

A graph 𝐺 = (V, E) is a data structure comprising:

V: a set of vertices (nodes)
E: a set of edges connecting pairs of vertices

Edges may be directed (u → v) or undirected (u ↔ v), and can carry weights (costs) or be unweighted.

Common Representations

## Adjacency List

```js
// JavaScript style
const graph = {
  A: ['B','C'],
  B: ['A','D','E'],
  C: ['A','F'],
  D: ['B'],
  E: ['B','F'],
  F: ['C','E']
};

```

- Pros: Space = O(V + E); efficient to iterate neighbors.
- Cons: Checking existence of a specific edge may be O(deg(v)).

## Adjacency Matrix

```
A B C D E F
-------------
A |0 1 1 0 0 0
B |1 0 0 1 1 0
C |1 0 0 0 0 1
D |0 1 0 0 0 0
E |0 1 0 0 0 1
F |0 0 1 0 1 0
```

- Pros: Edge existence check is O(1).
- Cons: Space = O(V²); iterating all neighbors is O(V).

## BFS (Bread First Search)

Use when you want the shortest path (in terms of edges) in an unweighted graph or to explore level by level.

a. Idea

- Start at a source vertex s.
- Visit all neighbors of s (distance = 1).
- Then visit neighbors’ neighbors (distance = 2), and so on.

```less
BFS(Graph, s):
  for each vertex u in Graph.V:
    u.color = WHITE    // unvisited
    u.dist  = ∞
    u.parent = NIL

  s.color = GRAY       // discovered
  s.dist  = 0
  s.parent = NIL

  Q = empty queue
  ENQUEUE(Q, s)

  while Q not empty:
    u = DEQUEUE(Q)
    for each v in Adj[u]:
      if v.color == WHITE:
        v.color  = GRAY
        v.dist   = u.dist + 1
        v.parent = u
        ENQUEUE(Q, v)
    u.color = BLACK     // finished

  // After this, dist and parent arrays encode the BFS tree
```

### Complexity

Time: O(V + E)
Space: O(V) for the queue and metadata

## DFS (Depth First Search)

Use when you want to explore deeply before backtracking (e.g., topological sort, cycle detection).

- Start at a source s (or loop over all unvisited vertices).
- “Go as deep as possible” along a path until you hit a dead end
- Backtrack and continue exploring unvisited branches.

```pseudo
DFS(Graph):
  for each vertex u in Graph.V:
    u.color = WHITE
    u.parent = NIL
  time = 0

  for each vertex u in Graph.V:
    if u.color == WHITE:
      DFS-Visit(u)

DFS-Visit(u):
  time = time + 1
  u.discover = time
  u.color = GRAY

  for each v in Adj[u]:
    if v.color == WHITE:
      v.parent = u
      DFS-Visit(v)

  u.color = BLACK
  time = time + 1
  u.finish = time
```

### Complexity

- Time: O(V + E)
- Space: O(V) for recursion stack (worst-case depth = V)
