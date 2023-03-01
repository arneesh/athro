class Node<T> {
    value: T;
    next: Node<T> | null = null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

interface ILinkedList<T> {
    push(value: T): Node<T>; // * add to the end
    pop(): void; // * remove from the end
    shift(): void; // * remove from the front
    unshift(value: T): Node<T>; // * add element to the front
    get(index: number): Node<T> | null; // * get a node
    set(index: number, value: T): Node<T> | null; // * set value for an existing node
    insert(index: number, value: T): Node<T> | null; // * insert at specific position
    remove(index: number): void; // * remove from specific position
    reverse(): unknown; // * reverse the linkedlist
    traverse(): void; // * traverse the linkedlist
}

export class LinkedList<T> implements ILinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    push(value: T): Node<T> {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            if (this.tail) {
                this.tail.next = node;
            }
            this.tail = node;
        }
        this.length++;
        return node;
    }

    pop(): void {
        if (!this.head) return;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        return;
    }

    shift(): void {
        if (!this.head) return;
        const current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return;
    }

    unshift(value: T): Node<T> {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return node;
    }

    get(index: number): Node<T> | null {
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while (counter != index) {
            if (current) {
                current = current?.next;
            }
            counter++;
        }
        return current;
    }

    set(index: number, value: T): Node<T> | null {
        let node = this.get(index);
        if (node) {
            node.value = value;
        }
        return node;
    }

    insert(index: number, value: T): Node<T> | null {
        if (index < 0 || index >= this.length) return null;
        if (index == this.length) return this.push(value);
        if (index == 0) return this.unshift(value);

        let prevNode = this.get(index - 1);
        let node = new Node(value);
        if (node && prevNode) {
            node.next = prevNode?.next;
            prevNode.next = node;
            this.length++;
        }
        return node;
    }

    remove(index: number): void {
        if (index < 0 || index >= this.length) return;
        if (index == this.length) return this.pop();
        if (index == 0) return this.shift();

        let prevNode = this.get(index - 1);
        let currentNode = this.get(index);
        if (prevNode && currentNode) {
            prevNode.next = currentNode?.next;
            this.length--;
        }
        return;
    }

    reverse(): unknown {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            if (node) {
                next = node?.next;
                node.next = prev;
                prev = node;
                node = next;
            }
        }
        return this;
    }

    traverse(): void {
        let current = this.head;
        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
        return;
    }
}
