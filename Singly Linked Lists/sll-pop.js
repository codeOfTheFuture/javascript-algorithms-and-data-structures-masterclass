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

  // Pop the last node off the end of the list
  // Big O - Time: O(1), Space: O(1)
  // Time complexity is O(1) because we only have to access the head and tail and iterate through the list once
  // Space complexity is O(1) because we are not creating any new data structures
  pop() {
    // If there are no nodes in the list, return undefined
    if (!this.head) return undefined;
    // Create a variable to store the current node
    // Create a variable to update the new tail as we loop through the list
    let current = this.head;
    let newTail = current;
    // Loop through the list until you reach the second to last node
    while (current.next) {
      // Set the new tail to be the current node
      newTail = current;
      // Set the current node to be the next node
      current = current.next;
    }
    // Set the tail to be the 2nd to last node
    this.tail = newTail;
    // Set the next property of the 2nd to last node to be null
    this.tail.next = null;
    // Decrement the length by one
    this.length--;
    // If there are no nodes in the list, set the head and tail to be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // Return the popped node
    return current;
  }

  print() {
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current.val);
      current = current.next;
    }

    return list;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(list.print());

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
