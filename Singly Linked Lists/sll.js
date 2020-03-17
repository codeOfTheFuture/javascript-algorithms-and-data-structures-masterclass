// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // This function should accept a value
    // Create a new node using the value passed to the function
    const newNode = new Node(val);
    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // Increment the length by one
    this.length++;
    // Return the list
    return this;
  }

  // traverse() {
  //   let current = this.head;
  //   while(current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  pop() {
    // If there are no nodes in the list, return undefined
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    // Loop through the list until you reach the tail
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // Set the tail to be the 2nd to last node
    this.tail = newTail;
    // Set the next property of the 2nd to last node to be null
    this.tail.next = null;
    // Decrement the length of the list by 1

    this.length--;

    // If there is one item in the list set the head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // Return the value of the node removed
    return current;
  }

  shift() {
    // If there are no nodes, return undefined
    if (!this.head) return undefined;

    // Store the current head property in a variable
    const currentHead = this.head;

    // Set the head property to be the current head's next property
    this.head = currentHead.next;

    // Decrement the length by 1
    this.length--;

    // If there is one item in the list set the tail to null
    if (this.length === 0) {
      this.tail = null;
    }

    // Return the value of the node removed
    return currentHead;
  }

  // This function should accept a value
  unshift(val) {
    // Create a new node using the value passed to the function
    const newNode = new Node(val);

    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Otherwise set the newly created node's next property to be the current head property on the list
      newNode.next = this.head;

      // Set the head property on the list to be that newly created node
      this.head = newNode;
    }

    // Increment the length of the list by 1
    this.length++;

    // Return the linked list
    return this;
  }

  get(index) {
    // This function should accept an index

    let counter = 0;
    let node = this.head;

    // If the index is less than zero or greater than or equal to the length of the list, return null
    if (index < 0 || index >= this.length) return null;

    // Loop through the list until you reach the index and return the node at that specific index
    while (counter !== index) {
      node = node.next;
      counter++;
    }

    return node;
  }

  set(value, index) {
    // This function should accept a value and an index

    // Use your get function to find the specific node
    let node = this.get(index);

    // If the node is not found, return false
    if (!node) {
      return false;
    } else {
      // If the node is found, set the value of that node to be the value passed to the function and return true
      node.val = value;
      return true;
    }
  }

  insert(value, index) {
    // Function takes an index and a value

    // If the index is less than zero or greater than the length, return false
    if (index < 0 || index > this.length) return false;
    // If the index is the same as the length, push a new node to the end of the list
    if (index === this.length) return !!this.push(value);
    // If the index is 0, unshift a new node to the start of the list
    if (index === 0) return !!this.unshift(value);
    const newNode = new Node(value);
    // Otherwise, using the get method, access the node at the index - 1
    let prev = this.get(index - 1);
    let temp = prev.next;
    // Set the next property on that node to be the new node
    prev.next = newNode;
    // Set the next property on the new node to be the previous next
    newNode.next = temp;
    // Increment the length
    this.length++;
    // Return true
    return true;
  }

  remove(index) {
    // Function takes an index

    // If the index is less than zero or greater than the length, return null
    if (index < 0 || index > this.length) return null;
    // If the index is the same as the length - 1, pop
    if (index === this.length - 1) return this.pop();
    // If the index is 0, shift
    if (index === 0) return this.shift();
    // Otherwise, using the get method, access the node at the index - 1
    const prev = this.get(index - 1);
    // Set the next property on that node to be the next of the next node
    const removed = prev.next;
    prev.next = removed.next;
    // Decrement the length
    this.length--;
    // Return the value of the node removed
    return removed;
  }
}

const list = new SinglyLinkedList();
