import { Node } from './types';

export function bfs<T>(root: Node<T>) {
    if (root === null || root === undefined) return root;
    var visited: T[] = [];
    var queue = [];
    var node;
    queue.push(root);

    while (queue.length > 0) {
        node = queue.shift();
        if (node) {
            visited.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return visited;
}
