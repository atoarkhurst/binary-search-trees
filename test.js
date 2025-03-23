import { Tree, generateNums, prettyPrint } from "./trees.js";

// Step 1: Create a BST from an array of random numbers (< 100)
const randomArray = generateNums(10);
console.log("Random Array:", randomArray);

const tree = new Tree(randomArray);

// Step 2: Confirm that the tree is balanced
console.log("Is tree balanced (initial)?", tree.isBalanced());

// Step 3: Print the tree structure and traversals
console.log("Tree Structure:");
prettyPrint(tree.root);

console.log("Level Order Traversal:");
tree.levelOrder(node => console.log(node.data));

console.log("Pre Order Traversal:");
tree.preOrder(node => console.log(node.data));

console.log("In Order Traversal:");
tree.inOrder(node => console.log(node.data));

console.log("Post Order Traversal:");
tree.postOrder(node => console.log(node.data));

// Step 4: Unbalance the tree by adding several numbers > 100
tree.insert(101);
tree.insert(134);
tree.insert(250);
console.log("\nAfter inserting numbers > 100 to unbalance:");
prettyPrint(tree.root);
console.log("Is tree balanced (unbalanced)?", tree.isBalanced());

// Step 5: Rebalance the tree
tree.rebalance();
console.log("\nAfter rebalancing the tree:");
prettyPrint(tree.root);
console.log("Is tree balanced (rebalanced)?", tree.isBalanced());

// Step 6: Print the traversals of the rebalanced tree
console.log("Level Order Traversal (rebalanced):");
tree.levelOrder(node => console.log(node.data));

console.log("Pre Order Traversal (rebalanced):");
tree.preOrder(node => console.log(node.data));

console.log("In Order Traversal (rebalanced):");
tree.inOrder(node => console.log(node.data));

console.log("Post Order Traversal (rebalanced):");
tree.postOrder(node => console.log(node.data));