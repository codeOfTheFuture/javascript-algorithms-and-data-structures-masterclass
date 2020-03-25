import { BinarySearchTree } from "../bst";

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

// DFS Post-order steps - recursively
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
// If the node has a left property, call the helper function with the left property on the node
// If the node has a right property, call the helper function with the right property on the node
// Push the value of the node to the variable that stores the values
// Invoke the helper function with the current variable

function dfsPostOrder(bst) {
  const result = [];
  const traverse = node => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.value);
  };
  traverse(bst.root);
  return result;
}

console.log(dfsPostOrder(bst));
