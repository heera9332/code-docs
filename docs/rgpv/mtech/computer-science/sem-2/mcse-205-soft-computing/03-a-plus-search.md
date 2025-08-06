# A* Search

A* is an informed (heuristic) best-first graph-search algorithm that finds a least-cost path from a given start node to a goal node. It orders node expansion by a score

f(n)=g(n)+h(n)

where

g(n) = cost of the best path found so far from the start to node 𝑛 and
h(n) = heuristic estimate of the cost from n to the goal.

If  h(n) is admissible (never overestimates true cost) and consistent, A* is both complete (will find a solution if one exists) and optimal (will find a least-cost solution).



## Key Takeaways

- A* always picks the frontier node n minimizing 𝑓(𝑛) = 𝑔(𝑛)+ℎ(𝑛) f(n)=g(n)+h(n).
- Good heuristics (tight, admissible, consistent) drastically prune the search.
- The algorithm maintains OPEN and CLOSED sets, updates  g/f values when better paths are found, and reconstructs the optimal path on reaching the goal.
