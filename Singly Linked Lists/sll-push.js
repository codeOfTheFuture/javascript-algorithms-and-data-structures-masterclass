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

  // Push a new value onto the end of the list
  // Big O - Time: O(1), Space: O(1)
  // Time complexity is O(1) because we only have to access the tail and add a new node to the end of the list
  // Space complexity is O(1) because we are not creating any new data structures
  push(val) {
    // Create a new node with the passed in value
    const newNode = new Node(val);
    // If there is no head, set the head and tail to be the new node
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
