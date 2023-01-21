import { bubbleSort } from '../src';

test('sort the array using bubble sort', () => {
    expect(bubbleSort([1, 4, 2, 6, 3])).toEqual(expect.arrayContaining([1, 2, 3, 4, 6]));
});
