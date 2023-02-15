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

export function preOrder<T>(root: Node<T>): any {
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
