import { it, expect, describe } from 'vitest';
import { BinarySearchTree } from '../src/datastructures/trees';

describe('binary search tree test suit', () => {

    it('insert - insert a node in the binary search tree ', () => {

        let bst = new BinarySearchTree();
        bst.insert(3);
        const result = bst.isPresent(3);
        expect(result).toBe(true);
    });

    it('isPresent - check if a particular node is present in the tree ', () => {

        let bst = new BinarySearchTree();
        bst.insert(2);
        bst.insert(3);
        bst.insert(9);
        const result = bst.isPresent(3);
        expect(result).toBe(true);
    });
});

