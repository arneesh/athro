import { it, expect, describe } from 'vitest';
import { BinarySearchTree } from '../src/datastructures/trees';
import { Node, bfs, preOrder, inOrder, postOrder } from '../src/algorithms';

describe('tree traversal test suit', () => {

    it('breadth first search', () => {

        let bst = new BinarySearchTree()
        bst.insert(3)
        bst.insert(7)
        bst.insert(2)
        bst.insert(9)
        bst.insert(16)
        bst.insert(11)
        bst.insert(4)

        let root = bst["root"];
        const result = bfs(root)
    });
    it('depth first search - pre order', () => {

        let bst = new BinarySearchTree()
        bst.insert(3)
        bst.insert(7)
        bst.insert(2)
        bst.insert(9)
        bst.insert(16)
        bst.insert(11)
        bst.insert(4)

        let root = bst["root"];
        const result = preOrder(root)
    });
    it('depth first search - in order', () => {

        let bst = new BinarySearchTree()
        bst.insert(3)
        bst.insert(7)
        bst.insert(2)
        bst.insert(9)
        bst.insert(16)
        bst.insert(11)
        bst.insert(4)

        let root = bst["root"];
        const result = inOrder(root)
    });
    it('depth first search - post order', () => {

        let bst = new BinarySearchTree()
        bst.insert(3)
        bst.insert(7)
        bst.insert(2)
        bst.insert(9)
        bst.insert(16)
        bst.insert(11)
        bst.insert(4)

        let root = bst["root"];
        const result = postOrder(root)
    });
});

