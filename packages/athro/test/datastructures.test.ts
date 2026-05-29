import { describe, it, expect } from 'vitest';
import { MinHeap, HashMap } from '../src';

describe('min heap', () => {
    it('extracts values in ascending order', () => {
        const heap = new MinHeap();
        heap.insert(8);
        heap.insert(3);
        heap.insert(6);

        expect(heap.extractMin()).toBe(3);
        expect(heap.extractMin()).toBe(6);
        expect(heap.extractMin()).toBe(8);
    });

    it('peeks at the smallest value', () => {
        const heap = new MinHeap();
        heap.insert(5);
        heap.insert(2);
        expect(heap.peek()).toBe(2);
        expect(heap.size()).toBe(2);
    });
});

describe('hash map', () => {
    it('stores and retrieves values', () => {
        const map = new HashMap<string, number>();
        map.set('one', 1);
        map.set('two', 2);

        expect(map.get('one')).toBe(1);
        expect(map.has('two')).toBe(true);
        expect(map.getSize()).toBe(2);
    });

    it('deletes values', () => {
        const map = new HashMap<string, number>();
        map.set('one', 1);
        expect(map.delete('one')).toBe(true);
        expect(map.has('one')).toBe(false);
    });
});
