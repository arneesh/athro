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
