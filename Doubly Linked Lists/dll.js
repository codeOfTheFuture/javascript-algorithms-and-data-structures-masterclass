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

  // Shift
  shift() {
    // If length is 0, return undefined
    if (!this.head) return undefined;
    // Store the current head property in a variable (we'll call it old head)
    const oldHead = this.head;
    // If the length is one
    if (this.length === 1) {
      // Set the head to be null
      this.head = null;
      // Set the tail to be null
      this.tail = null;
    }
    // Update the head to be the next of the old head
    this.head = oldHead.next;
    // Set the head's prev property to null
    this.head.prev = null;
    // Set the old head's next to null
    oldHead.next = null;

    // Decrement the length
    this.length--;
    // Return old head
    return oldHead;
  }
}

const newList = new DoublyLinkedList();
