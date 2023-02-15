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

interface IBinarySearchTree<T> {
    insert(value: T): Node<T> | null;
    isPresent(value: T): boolean;
}

export class BinarySearchTree<T> implements IBinarySearchTree<T> {
    private root: Node<T> | null = null;

    insert(value: T): Node<T> | null {
        let newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            return newNode;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return null;
                if (value < current.value) {
                    if (current.left == null) {
                        current.left = newNode;
                        return newNode;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right == null) {
                        current.right = newNode;
                        return newNode;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    isPresent(value: T): boolean {
        if (this.root === null) return false;
        let current = this.root;
        let nodeFound = false;

        while (current && !nodeFound) {
            if (value < current.value) {
                if (current) {
                    if (current.left != null) {
                        current = current.left;
                    }
                }
            } else if (value > current.value) {
                if (current.right != null) {
                    current = current.right;
                }
            } else {
                nodeFound = true;
            }
        }
        return nodeFound ? nodeFound : false;
    }
}
