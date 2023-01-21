import { linearSearch } from '../src';

test('number exists in the list', () => {
    expect(linearSearch([1, 4, 2, 6, 3], 4)).toBe(1);
});

test('number does not exist in the list', () => {
    expect(linearSearch([1, 4, 2, 6, 3], 9)).toBe(-1);
});
