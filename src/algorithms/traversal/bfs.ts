class Node<T> {
    value: T;
    left: Node<T> | null = null;
    right: Node<T> | null = null;
    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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
