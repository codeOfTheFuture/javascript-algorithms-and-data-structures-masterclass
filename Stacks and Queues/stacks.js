class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Stack Pushing
  push(value) {
    // The function should accept a value
    // Create a new node with that value
    const newNode = new Node(value);
    // If there are no nodes in the stack, set the first and last property to be the newly created node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // If there is at least one node, create a variable that stores the current first property on the stack
      const oldFirst = this.first;
      // Reset the first property to be the newly created node
      this.first = newNode;
      // Set the next property on the node to be the previously created variable
      this.first.next = oldFirst;
    }
    // Increment the size of the stack by 1 and return it
    return ++this.size;
  }

  // Stack Popping
  pop() {
    // If there are no nodes in the stack, return null
    if (!this.first) return null;
    // Create a temporary variable to store the first property on the stack
    let currentFirst = this.first;
    // If there is only 1 node, set the first and last property to be null
    if (this.first === this.last) {
      this.last === null;
    }
    // If there is more than one node, set the first property to be the next property on the current first
    this.first = this.first.next;
    currentFirst.next = null;
    // Decrement the size by 1
    this.size--;
    // Return the removed node's value
    return currentFirst.value;
  }
}

// Big O of Stacks

// Prioritizes insertion and removal
// Insertion - O(1)
// Removal - O(1)
// Searching = O(n)
// Access - O(n)
