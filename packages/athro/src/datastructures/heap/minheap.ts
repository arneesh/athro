interface IMinHeap {
    insert(value: number): void;
    extractMin(): number | undefined;
    peek(): number | undefined;
    size(): number;
    isEmpty(): boolean;
}

export class MinHeap implements IMinHeap {
    private heap: number[] = [];

    insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop() as number;
        this.bubbleDown(0);
        return min;
    }

    peek(): number | undefined {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            this.swap(parent, index);
            index = parent;
        }
    }

    private bubbleDown(index: number): void {
        while (true) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            let smallest = index;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
