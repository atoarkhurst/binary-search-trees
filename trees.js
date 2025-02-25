// Build a Node class/factory
class Node {
    constructor(data, leftChild, rightChild) {
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}

// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.
class Tree {
    constructor(array){
        this.array = array;
        this.root = this.buildTree(array);
    }
      // Placeholder for buildTree method (you'll implement this next)
      buildTree(array) {
        // This method should construct a balanced BST and return the root node
        return null; // You'll replace this with the actual logic
    }
}