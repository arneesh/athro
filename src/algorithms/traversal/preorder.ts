import { Node } from './types';

export function preOrder<T>(root: Node<T>): T[] {
    if (root === null || root === undefined) return root;
    let visited: T[] = [];
    let current = root;

    function traverse(node: Node<T>) {
        visited.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(current);
    return visited;
}
