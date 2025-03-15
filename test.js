import {Tree, prettyPrint} from "./trees.js";

let arr = [1, 7, 4, 23, 8, 9, 4, 3];
let tree = new Tree(arr);

let root = tree.root;
// console.log(root);

prettyPrint(root);


function callback (node) {
    console.log(node);
}

tree.inOrder(callback);