class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert
  insert(value) {
    // Create a new node
    const newNode = new Node(value);
    // Starting at the root
    // Check if there is a root, if not - the root now becomes that new node
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        //If there is a root, check if the value of the new node is greater than or less than the value of the root
        if (value < current.value) {
          // If it is greater
          // Check to see if there is a node to the right
          if (current.left === null) {
            // If there is not, add that node as the right property
            current.left = newNode;
            return this;
          } else {
            // If there is, move to that node and repeat these steps
            current = current.left;
          }
        } else {
          // If it is less
          // Check to see if there is a node to the left
          if (value > current.value) {
            if (current.right === null) {
              // If there is not, add that node as the left property
              current.right = newNode;
              return this;
            } else {
              // If there is, move to that node and repeat these steps
              current = current.right;
            }
          }
        }
      }
    }
  }
}

const bst = new BinarySearchTree();
