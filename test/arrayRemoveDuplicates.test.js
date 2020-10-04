import {arrayRemoveDuplicates}  from '../generics/arrayRemoveDuplicates';

test('adds 1 + 2 to equal 3', () => {
  expect(arrayRemoveDuplicates([1,2,4,2,5])).toBe([1,2,4,5]);
});