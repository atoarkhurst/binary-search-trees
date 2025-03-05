import {Tree, prettyPrint} from "./trees.js";

let arr = [1, 7, 4, 23, 8, 9, 4, 3];
let tree = new Tree(arr);

let root = tree.root;
console.log(root);

prettyPrint(root);

tree.insert(12);
tree.insert(18);
tree.insert(8);

prettyPrint(root);

