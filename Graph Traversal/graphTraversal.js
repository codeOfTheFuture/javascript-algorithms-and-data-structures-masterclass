class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add Vertex
  // Big O - Time complexity: O(1) - Constant time to add a vertex.
  // Big O - Space complexity: O(1) - Constant space to add a vertex.
  addVertex(vertex) {
    // If the vertex is not in the adjacency list, add it and set it to an empty array
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Add Edge
  // Big O - Time complexity: O(1) - Constant time to add an edge.
  // Big O - Space complexity: O(1) - Constant space to add an edge.
  addEdge(vertex1, vertex2) {
    // Add vertex2 to vertex1's list
    this.adjacencyList[vertex1].push(vertex2);
    // Add vertex1 to vertex2's list
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Remove Edge
  // Big O - Time complexity: O(1) - Constant time to remove an edge.
  // Big O - Space complexity: O(1) - Constant space to remove an edge.
  removeEdge(vertex1, vertex2) {
    // Iterate over vertex1's neighbors to find vertex2 and remove it
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    // Iterate over vertex2's neighbors to find vertex1 and remove it
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // Remove Vertex
  // Big O - Time complexity: O(V + E) - Linear time to remove a vertex. V is the number of vertices and E is the number of edges.
  removeVertex(vertex) {
    // Use while loop to iterate over the vertex's neighbors as long as there are neighbors
    while (this.adjacencyList[vertex].length) {
      // Create a reference to the vertex's neighbor and remove it from the adjacency list of the vertex
      const adjacentVertex = this.adjacencyList[vertex].pop();
      // Call removeEdge on the vertex and the neighbor
      this.removeEdge(vertex, adjacentVertex);
    }
    // Once there are no neighbors, delete the vertex from the adjacency list
    delete this.adjacencyList[vertex];
  }

  // Depth First Search - Recursive
  // Big O - Time complexity: O(V + E) - Linear time to traverse the graph. V is the number of vertices and E is the number of edges. This is because the recursive function will call itself on each vertex.
  // Big O - Space complexity: O(V) - Linear space to keep track of visited vertices. V is the number of vertices.
  depthFirstRecursive(start) {
    // Create a results array
    const result = [];
    // Create a visited object to keep track of visited vertices
    const visited = {};
    // Create a reference to the adjacency list to avoid scope issues
    const adjacencyList = this.adjacencyList;

    // Create a helper function to traverse the graph
    (function dfs(vertex) {
      // If vertex is undefined, return null
      if (!vertex) return null;
      // Mark the vertex as visited in the visited object
      visited[vertex] = true;
      // Push the vertex to the results array
      result.push(vertex);
      // Iterate over the vertex's neighbors to traverse the graph
      adjacencyList[vertex].forEach(
        // Recursively call dfs on each neighbor if it has not been visited
        (neighbor) => !visited[neighbor] && dfs(neighbor)
      );
    })(start);
    // Return the results array
    return result;
  }

  // Depth First Search - Iterative
  // Big O - Time complexity: O(V + E) - Linear time to traverse the graph. V is the number of vertices and E is the number of edges.
  // Big O - Space complexity: O(V) - Linear space to keep track of visited vertices. V is the number of vertices.
  depthFirstIterative(start) {
    // Create a results array
    const result = [];
    // Create a visited object to keep track of visited vertices
    const visited = {};
    // Create a stack to keep track of the vertices to be visited
    const stack = [start];
    // Create a reference to the adjacency list to avoid scope issues
    const adjacencyList = this.adjacencyList;

    // While the stack is not empty
    while (stack.length) {
      // Create a reference to the vertex at the top of the stack
      const vertex = stack.pop();
      // If the vertex has not been visited
      if (!visited[vertex]) {
        // Mark the vertex as visited
        visited[vertex] = true;
        // Push the vertex to the results array
        result.push(vertex);
        // Iterate over the vertex's neighbors to traverse the graph
        adjacencyList[vertex].forEach(
          // Push each neighbor to the stack
          (neighbor) => stack.push(neighbor)
        );
      }
    }
    // Return the results array
    return result;
  }

  // Breadth First Search - Iterative
  // Big O - Time complexity: O(V + E) - Linear time to traverse the graph. V is the number of vertices and E is the number of edges.
  // Big O - Space complexity: O(V) - Linear space to keep track of visited vertices. V is the number of vertices.
  breadthFirstIterative(start) {
    // Create a results array
    const result = [];
    // Create a visited object to keep track of visited vertices
    const visited = {};
    // Create a queue to keep track of the vertices to be visited
    const queue = [start];
    // Create a reference to the adjacency list to avoid scope issues
    const adjacencyList = this.adjacencyList;

    // While the queue is not empty
    while (queue.length) {
      // Create a reference to the vertex at the front of the queue
      const vertex = queue.shift();
      // If the vertex has not been visited
      if (!visited[vertex]) {
        // Mark the vertex as visited
        visited[vertex] = true;
        // Push the vertex to the results array
        result.push(vertex);
        // Iterate over the vertex's neighbors to traverse the graph
        adjacencyList[vertex].forEach(
          // Push each neighbor to the queue
          (neighbor) => queue.push(neighbor)
        );
      }
    }
    // Return the results array
    return result;
  }
}

const g = new Graph();
g.addVertex("A"); // vertex A
g.addVertex("B"); // vertex B
g.addVertex("C"); // vertex C
g.addVertex("D"); // vertex D
g.addVertex("E"); // vertex E
g.addVertex("F"); // vertex F

g.addEdge("A", "B"); // A -> B edge
g.addEdge("A", "C"); // A -> C edge
g.addEdge("B", "D"); // B -> D edge
g.addEdge("C", "E"); // C -> E edge
g.addEdge("D", "E"); // D -> E edge
g.addEdge("D", "F"); // D -> F edge

const bfs = g.breadthFirstIterative("A");
console.log(bfs);
