class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Enqueue
  enqueue(value) {
    // This function accepts some value

    // Create a new node using that value passed to the function
    const newNode = new Node(value);
    // If there are no nodes in the queue, set this node to  be the first and last property of the queue
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
      this.last.next = newNode;
      this.last = newNode;
    }
    // Increment the size and return
    return ++this.size;
  }

  // Dequeue
  dequeue() {
    // If there is no first property, just return null
    if (!this.first) return null;
    // Store the first property in a variable
    let oldFirst = this.first;
    // See if the first is the same as the last (check if there is only 1 node).
    if (this.first === this.last) {
      // If so, set the first and last to be null
      this.last = null;
    }
    // If there is more than 1 node, set the first property to be the next property of the first
    this.first = this.first.next;

    oldFirst.next = null;
    // Decrement the size by 1
    this.size--;
    // Return the value of the node dequeued
    return oldFirst.value;
  }
}

// Big O of Queues

// Prioritizes insertion and removal
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Access - O(n)
