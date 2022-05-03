// Has Path
// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes(start and end) and returns a boolean representing whether or not a path exists between the two nodes.

// Big O Time Complexity: O(n) where n is the number of nodes in the graph
// Big O Space Complexity: O(n) where n is the number of nodes in the graph

// Has Path - Recursive
// function hasPath(graph, start, end) {
//   if (start === end) return true;

//   for (let neighbor of graph[start]) {
//     if (hasPath(graph, neighbor, end) === true) return true;
//   }

//   return false;
// }

// Has Path - Iterative - BFS
function hasPath(graph, start, end) {
  // Create a queue and enqueue the start vertex
  let queue = [start];

  // While the queue is not empty
  while (queue.length) {
    // Dequeue a vertex from the queue
    let current = queue.shift();

    // If the current vertex is the end vertex, return true because a path exists
    if (current === end) return true;

    // Iterate over the current vertex's neighbors
    for (let neighbor of graph[current]) {
      // Enqueue the neighbor
      queue.push(neighbor);
    }
  }
  // If the the vertex assigned to current is never equal to the end vertex once traversal has completed, return false because a path does not exist
  return false;
}

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath(graph, "f", "g")); // true
console.log(hasPath(graph, "i", "g")); // true
console.log(hasPath(graph, "k", "g")); // false
console.log(hasPath(graph, "i", "k")); // true
console.log(hasPath(graph, "g", "i")); // false
console.log(hasPath(graph, "f", "l")); // false
