// Create a class for a weighted graph
// A weighted graph is a graph where each edge has a weight associated with it (e.g. 5, 3, 4, etc.)  The weight of an edge indicates the difficulty of reaching that edge from the starting node.  For example, in the movie "The Matrix", the edge between Agent Smith and Neo is weighted 3. In "Star Wars IV: A New Hope", the edge between Luke Skywalker and Darth Vader is weighted 4.

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add Vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Add Edge to the graph (with weight)
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  // Shortest Path
  // Dijkstra's Algorithm
  // Find the shortest path between two nodes in a graph

  // This function will take in a start node and end node.
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = []; // to be returned at the end

    // Build up initial state
    // Loop through each node in the graph
    for (let vertex in this.adjacencyList) {
      // If the node is the start node, set its distance to 0
      if (vertex === start) {
        distances[vertex] = 0;
        // Add the node to the priority queue with a priority of 0
        nodes.enqueue(vertex, 0);
      } else {
        // Set all other nodes to infinity
        distances[vertex] = Infinity;
        // Add all other nodes to the priority queue with a priority of infinity
        nodes.enqueue(vertex, Infinity);
      }
      // Set all previous nodes to null
      previous[vertex] = null;
    }

    // While there are still nodes to visit
    while (nodes.values.length) {
      // Dequeue a node from the priority queue and assign it's value to smallest
      smallest = nodes.dequeue().val;
      // If the smallest node is the finish node, we're done
      if (smallest === finish) {
        // Build up the path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        // Break out of the while loop
        break;
      }
      // Otherwise, if the smallest node is not the finish node we'll need to loop through each edge of the smallest node

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // Grab the neighboring node
          let neighborNode = this.adjacencyList[smallest][neighbor];
          // Calculate the distance to the neighboring node
          // The new sum is the distance to the smallest node + the distance to the neighboring node
          let candidate = distances[smallest] + neighborNode.weight;

          if (candidate < distances[neighborNode.node]) {
            // If the new distance is less than the current distance, update the new smallest distance
            distances[neighborNode.node] = candidate;
            // Update previous - How we got to the neighbor node
            previous[neighborNode.node] = smallest;
            // Enqueue the neighbor with the new priority
            nodes.enqueue(neighborNode.node, candidate);
          }
        }
      }
    }
    // Return the path
    return path.concat(smallest).reverse();
  }

  // Print adjacency list
  print() {
    console.log(this.adjacencyList);
  }
}

// Class for a node in a graph
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// Priority Queue
// A priority queue is a data structure that stores items in such a way that the highest-priority item is always at the front of the queue.
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // Enqueue method
  // Inserts a new value into the priority queue
  // Takes in a value and a priority
  // Time Complexity: O(log n)
  // Space Complexity: O(1)
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  // Bubble up method
  // Moves the last inserted value up the priority queue until it is in the correct position to be dequeued
  // Time Complexity: O(log n)
  // Space Complexity: O(1)
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // Dequeue method
  // Removes the value at the front of the priority queue
  // Time Complexity: O(log n)
  // Space Complexity: O(1)
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  // Sink down method
  // Moves the first value down the priority queue until it is in the correct position to be dequeued
  // Time Complexity: O(log n)
  // Space Complexity: O(1)
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");
weightedGraph.addVertex("D");
weightedGraph.addVertex("E");
weightedGraph.addVertex("F");
weightedGraph.addEdge("A", "B", 4);
weightedGraph.addEdge("A", "C", 2);
weightedGraph.addEdge("B", "E", 3);
weightedGraph.addEdge("C", "D", 2);
weightedGraph.addEdge("C", "F", 4);
weightedGraph.addEdge("D", "E", 3);
weightedGraph.addEdge("D", "F", 1);
weightedGraph.addEdge("E", "F", 1);

weightedGraph.print();
const shortestPath = weightedGraph.dijkstra("A", "E");
console.log(shortestPath); // Should print ['A', 'C', 'D', 'F', 'E']
