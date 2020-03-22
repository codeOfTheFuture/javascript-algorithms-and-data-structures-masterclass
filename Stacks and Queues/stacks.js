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

  // If there are no nodes in the stack, return null
  // Create a temporary variable to store the first property on the stack
  // If there is only 1 node, set the first and last property to be null
  // If there is more than one node, set the first property to be the next property on the current first
  // Decrement the size by 1

  pop() {
    if (!this.first) return null;

    let currentFirst = this.first;

    if (this.first === this.last) {
      this.last === null;
    }

    this.first = this.first.next;
    currentFirst.next = null;

    this.size--;

    return currentFirst.value;
  }
}
