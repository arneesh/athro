import { Node } from './types';

export function inOrder<T>(root: Node<T>): T[] {
    if (root === null || root === undefined) return root;
    var visited: T[] = [];
    var current = root;

    function traverse(node: Node<T>) {
        if (node.left) traverse(node.left);
        visited.push(node.value);
        if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
}
