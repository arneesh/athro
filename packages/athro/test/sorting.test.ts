import { it, expect } from 'vitest';
import { bubbleSort, insertionSort, selectionSort, mergeSort, quickSort, heapSort, countingSort, radixSort } from '../src';

const unsorted = [1, 4, 2, 6, 3];
const sorted = [1, 2, 3, 4, 6];

it('sorts the array using bubble sort', () => {
    expect(bubbleSort([...unsorted])).toEqual(sorted);
});

it('sorts the array using insertion sort', () => {
    expect(insertionSort([...unsorted])).toEqual(sorted);
});

it('sorts the array using selection sort', () => {
    expect(selectionSort([...unsorted])).toEqual(sorted);
});

it('sorts the array using merge sort', () => {
    expect(mergeSort([...unsorted])).toEqual(sorted);
});

it('sorts the array using quick sort', () => {
    expect(quickSort([...unsorted])).toEqual(sorted);
});

it('sorts the array using heap sort', () => {
    expect(heapSort([...unsorted])).toEqual(sorted);
});

it('sorts the array using counting sort', () => {
    expect(countingSort([...unsorted])).toEqual(sorted);
});

it('sorts the array using radix sort', () => {
    expect(radixSort([...unsorted])).toEqual(sorted);
});
