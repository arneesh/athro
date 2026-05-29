import { it, expect, describe } from 'vitest';
import { BinarySearchTree } from '../src';

describe('binary search tree', () => {
    it('inserts values into the tree', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(3);
        expect(bst.isPresent(3)).toBe(true);
    });

    it('finds existing values', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(2);
        bst.insert(3);
        bst.insert(9);
        expect(bst.isPresent(3)).toBe(true);
    });

    it('returns false for missing values', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(2);
        bst.insert(3);
        bst.insert(9);
        expect(bst.isPresent(5)).toBe(false);
    });

    it('exposes the root node for traversals', () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(3);
        expect(bst.getRoot()?.value).toBe(3);
    });
});
