class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Set - Set the value of the node at the index passed to the function and return true if successful or false if the index is out of range
  // Big O - Time: O(n), Space: O(1)
  // Time complexity is O(n) because we have to loop through the list to find the node at the index
  // Space complexity is O(1) because we are not creating any new data structures
  set(index, val) {
    // If the index is less than zero or greater than or equal to the length of the list, return false
    if (index < 0 || index >= this.length) return false;
    // Set a variable to be the head of the list
    let current = this.head;
    // Loop through the list until the index is reached
    for (let i = 0; i < index; i++) {
      // Set the current variable to be the next node
      current = current.next;
    }
    // Set the value of the node at the index to be the value passed to the function
    current.val = val;
    // Return true
    return true;
  }
}
