import { it, expect, describe } from 'vitest';
import { BinarySearchTree } from '../src';
import { bfs, preOrder, inOrder, postOrder } from '../src/algorithms';

describe('tree traversal', () => {
    const buildTree = () => {
        const bst = new BinarySearchTree<number>();
        bst.insert(3);
        bst.insert(7);
        bst.insert(2);
        bst.insert(9);
        bst.insert(16);
        bst.insert(11);
        bst.insert(4);
        return bst;
    };

    it('breadth first search', () => {
        const root = buildTree().getRoot();
        expect(bfs(root)).toEqual([3, 2, 7, 4, 9, 16, 11]);
    });

    it('depth first search - pre order', () => {
        const root = buildTree().getRoot();
        expect(preOrder(root)).toEqual([3, 2, 7, 4, 9, 16, 11]);
    });

    it('depth first search - in order', () => {
        const root = buildTree().getRoot();
        expect(inOrder(root)).toEqual([2, 3, 4, 7, 9, 11, 16]);
    });

    it('depth first search - post order', () => {
        const root = buildTree().getRoot();
        expect(postOrder(root)).toEqual([2, 4, 11, 16, 9, 7, 3]);
    });
});
