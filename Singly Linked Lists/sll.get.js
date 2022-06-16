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

  // Get the value of the node at a given index
  // Big O - Time: O(n), Space: O(1)
  // Time complexity is O(n) because we have to loop through the list to find the node at the index
  // Space complexity is O(1) because we are not creating any new data structures
  get(index) {
    // If the index is less than zero or greater than or equal to the length of the list, return undefined
    if (index < 0 || index >= this.length) return undefined;
    // Set a variable to be the head of the list
    let current = this.head;
    // Loop through the list until the index is reached
    for (let i = 0; i < index; i++) {
      // Set the current variable to be the next node
      current = current.next;
    }
    // Return the value of the node at the index
    return current.val;
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

console.log(list.get(2)); // 3
console.log(list.get(4)); // 5
console.log(list.get(6)); // undefined
