class Node<T> {
    value: T;
    next: Node<T> | null = null;
    prev: Node<T> | null = null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

interface IDoublyLinkedList<T> {
    push(value: T): Node<T>;
    pop(): void;
    shift(): void;
    unshift(value: T): Node<T>;
    get(index: number): Node<T> | null;
    set(index: number, value: T): Node<T> | null;
    insert(index: number, value: T): Node<T> | null;
    remove(index: number): void;
    traverse(): unknown;
}

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    push(value: T): Node<T> {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            if (this.tail) {
                this.tail.next = node;
            }
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return node;
    }

    pop(): void {
        if (!this.head) return;
        let currentTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            if (currentTail) {
                this.tail = currentTail.prev;
                if (this.tail) {
                    this.tail.next = null;
                    currentTail.prev = null;
                }
            }
        }
        this.length--;
        return;
    }

    shift(): void {
        if (!this.head) return;
        let oldHead = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newHead = oldHead.next;
            if (newHead) {
                newHead.prev = null;
                oldHead.next = null;
                this.head = newHead;
            }
        }
        this.length--;
        return;
    }

    unshift(value: T): Node<T> {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let oldHead = this.head;
            node.next = oldHead;
            oldHead.prev = node;
            this.head = node;
        }
        this.length++;
        return node;
    }

    get(index: number): Node<T> | null {
        if (index === undefined) return null;
        // TODO: add type checks everywhere
        if (typeof index === 'string') return null;
        if (index % 1 !== 0) return null;

        if (index < 0 || index >= this.length) return null;
        let mid = Math.floor(this.length / 2);

        var counter, current;

        if (index <= mid) {
            counter = 0;
            current = this.head;
            while (counter != index) {
                if (current) {
                    current = current.next;
                    counter++;
                }
            }
        } else {
            counter = this.length - 1;
            current = this.tail;
            while (counter != index) {
                if (current) {
                    current = current.prev;
                    counter--;
                }
            }
        }
        return current;
    }

    set(index: number, value: T): Node<T> | null {
        let node = this.get(index);

        if (node !== null) {
            node.value = value;
            return node;
        }
        return null;
    }

    insert(index: number, value: T): Node<T> | null {
        if (index < 0 || index > this.length) return null;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        let newNode = new Node(value);
        let beforeNode = this.get(index - 1);
        if (beforeNode) {
            let afterNode = beforeNode.next;
            (beforeNode.next = newNode), (newNode.prev = beforeNode);
            if (afterNode) {
                (newNode.next = afterNode), (afterNode.prev = newNode);
                this.length++;
                return newNode;
            }
        }
        return null;
    }

    remove(index: number): void {
        if (index < 0 || index >= this.length) return;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        if (removedNode) {
            if (removedNode.prev && removedNode.next) {
                removedNode.prev.next = removedNode.next;
                removedNode.next.prev = removedNode.prev;
                removedNode.next = null;
                removedNode.prev = null;
                this.length--;
                return;
            }
        }
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
