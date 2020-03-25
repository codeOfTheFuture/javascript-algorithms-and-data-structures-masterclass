import { BinarySearchTree } from "../bst";

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

// Depth First In-Order Steps - Recursively
function dfsInOrder(bst) {
  // Create a variable to store the values of nodes visited
  const result = [];
  // Write a helper function which accepts a node
  const traverse = node => {
    // If the node has a left property, call the helper function with the left property on the node
    if (node.left) traverse(node.left);
    // Push the value of the node to the variable that stores the values
    result.push(node.value);
    // If the node has a right property, call the helper function with the right property on the node
    if (node.right) traverse(node.right);
  };
  // Invoke the helper function with the current variable
  traverse(bst.root);
  return result;
}

console.log(dfsInOrder(bst));
