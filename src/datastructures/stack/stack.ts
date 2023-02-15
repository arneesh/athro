class Node<T> {
    value: T;
    next: Node<T> | null = null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

interface IStack<T> {
    push(value: T): Node<T>;
    pop(): void;
    top(): T | null;
    isEmpty(): boolean;
}

export class Stack<T> implements IStack<T> {
    private first: Node<T> | null = null;
    private last: Node<T> | null = null;
    private size: number = 0;

    push(value: T): Node<T> {
        let newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let currentNode = this.first;
            newNode.next = currentNode;
            this.first = newNode;
        }
        this.size++;
        return newNode;
    }

    pop(): void {
        if (!this.first) return;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return;
    }

    top(): T | null {
        if (!this.first) return null;
        return this.first.value;
    }

    isEmpty(): boolean {
        if (!this.first) return true;
        return false;
    }
}
