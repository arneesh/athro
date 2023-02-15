import { Node } from './types';

export function postOrder<T>(root: Node<T>): T[] {
    if (root === null || root === undefined) return root;
    var visited: T[] = [];
    var current = root;

    function traverse(node: Node<T>) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.value);
    }
    traverse(current);
    return visited;
}
