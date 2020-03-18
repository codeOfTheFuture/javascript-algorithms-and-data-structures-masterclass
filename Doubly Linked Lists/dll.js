// Node Class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push
  push(value) {
    // Create a new node with the value passed to the function
    const newNode = new Node(value);
    // If the head property is null set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If not, set the  next property on the tail to be that node
      this.tail.next = newNode;
      // Set the previous property on the newly created node to be the tail
      newNode.prev = this.tail;
      // Set the tail to be the newly created node
      this.tail = newNode;
    }
    // Increment the length
    this.length++;
    // Return the Doubly Linked List
    return this;
  }

  // Pop
  pop() {
    // If there is no head, return undefined
    if (!this.head) return undefined;
    // Store the current tail in a variable to return later
    const poppedNode = this.tail;
    // If the length is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update the tail to be the previous node.
      this.tail = this.tail.prev;
      // Set the new tail's next to null
      this.tail.next = null;
      // Set the old tail's prev to null
      poppedNode.prev = null;
    }
    // Decrement the length
    this.length--;
    // return the value removed
    return poppedNode;
  }
}

const newList = new DoublyLinkedList();
