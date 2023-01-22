import { bubbleSort, insertionSort, selectionSort, mergeSort } from '../src';

test('sort the array using bubble sort', () => {
    expect(bubbleSort([1, 4, 2, 6, 3])).toEqual(expect.arrayContaining([1, 2, 3, 4, 6]));
});

test('sort the array using insertion sort', () => {
    expect(insertionSort([1, 4, 2, 6, 3])).toEqual(expect.arrayContaining([1, 2, 3, 4, 6]));
});

test('sort the array using selection sort', () => {
    expect(selectionSort([1, 4, 2, 6, 3])).toEqual(expect.arrayContaining([1, 2, 3, 4, 6]));
});

test('sort the array using merge sort', () => {
    expect(mergeSort([1, 4, 2, 6, 3])).toEqual(expect.arrayContaining([1, 2, 3, 4, 6]));
});
