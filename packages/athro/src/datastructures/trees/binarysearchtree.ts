export class BSTNode<T> {
    value: T;
    left: BSTNode<T> | null = null;
    right: BSTNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

interface IBinarySearchTree<T> {
    insert(value: T): BSTNode<T> | null;
    isPresent(value: T): boolean;
    getRoot(): BSTNode<T> | null;
}

export class BinarySearchTree<T> implements IBinarySearchTree<T> {
    private root: BSTNode<T> | null = null;

    insert(value: T): BSTNode<T> | null {
        const newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
            return newNode;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) return null;
            if (value < current.value) {
                if (current.left == null) {
                    current.left = newNode;
                    return newNode;
                }
                current = current.left;
            } else {
                if (current.right == null) {
                    current.right = newNode;
                    return newNode;
                }
                current = current.right;
            }
        }
    }

    isPresent(value: T): boolean {
        let current = this.root;

        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }

        return false;
    }

    getRoot(): BSTNode<T> | null {
        return this.root;
    }
}
