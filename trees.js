// Build a Node class/factory
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// build a Tree class
export class Tree {
    constructor(array){
        this.array = array;
        this.root = this.buildTree(array);

    }
    // construct a balanced BST and return the root node
    buildTree(array) {
        array = removeDuplicates(array);
        array = sortArray(array);

        if ( array.length === 0 ) {
            return null; // Edge case: empty array
        }

        // find mid 
        let n = array.length;
        let mid = Math.floor((n - 1) / 2);
        let root = new Node(array[mid]); // root node is the middle element
        let queue = [{ node: root, range: [0, n - 1] }]; // queue stores nodes + range
        let frontIndex = 0;
        
        while (frontIndex < queue.length) {
            let { node, range } = queue[frontIndex]; // dequeue first element
            let[start, end] = range;
            let midIndex = start + Math.floor((end - start) / 2);

            if (start < midIndex) {
                let leftMid = start + Math.floor((midIndex - 1 - start) / 2);
                let leftNode = new Node (array[leftMid]);
                node.left = leftNode;
                queue.push({node: leftNode, range: [start, midIndex - 1]});
            }

            if ( end > midIndex) {
                let rightMid = midIndex + 1 + Math.floor((end - (midIndex + 1)) / 2);
                let rightNode = new Node (array[rightMid]);
                node.right = rightNode;
                queue.push({node: rightNode, range: [midIndex + 1, end]});

            }

            frontIndex++;
        }
        return root;//return root node
    }

    // insert a new value
    insert(value, root = this.root) {
        
        // edge case: empty tree
        if (root === null) {
            return new Node(value);
        }

        // edge case: duplicate
        if (root.data === value) {
            return root;
        }

        if (value < root.data) {
            root.left = this.insert(value, root.left);
        } else if (value > root.data) {
            root.right = this.insert(value, root.right);
        }
        return root;
    }
}


function removeDuplicates(array) {
    let sortedArray = [...new Set(array)];
    return sortedArray;
}

function sortArray (array) {
    return array.sort(function(a,b){return a - b});
}

export const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }

    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };