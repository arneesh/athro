class Node<T> {
    value: T;
    next: Node<T> | null = null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

interface IQueue<T> {
    enqueue(value: T): Node<T>;
    dequeue(): void;
    peek(): T | null;
    isEmpty(): boolean;
    getSize(): number;
}

export class Queue<T> implements IQueue<T> {
    private front: Node<T> | null = null;
    private rear: Node<T> | null = null;
    private size: number = 0;

    enqueue(value: T): Node<T> {
        const node = new Node(value);

        if (!this.front) {
            this.front = node;
            this.rear = node;
        } else {
            if (this.rear) {
                this.rear.next = node;
                this.rear = node;
            }
        }
        this.size++;
        return node;
    }

    dequeue(): void {
        if (!this.front) return;

        if (this.front == this.rear) {
            this.rear = null;
        }
        this.front = this.front.next;
        this.size--;
        return;
    }

    peek(): T | null {
        if (!this.front) return null;
        return this.front.value;
    }

    isEmpty(): boolean {
        if (!this.front) return true;
        return false;
    }

    getSize(): number {
        return this.size;
    }
}
