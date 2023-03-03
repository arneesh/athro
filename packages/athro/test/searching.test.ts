import { describe, it, expect } from 'vitest';
import { linearSearch, binarySearch } from '../src';

describe('linear search suit', () => {
    it('number exists in the list', () => {
        expect(linearSearch([1, 4, 2, 6, 3], 4)).toBe(1);
    });

    it('number does not exist in the list', () => {
        expect(linearSearch([1, 4, 2, 6, 3], 9)).toBe(-1);
    });
});

describe('binary search suit', () => {
    it('number exists in the list', () => {
        expect(binarySearch([1, 2, 5, 6, 8], 5)).toBe(2);
    });

    it('number does not exist in the list', () => {
        expect(binarySearch([1, 2, 5, 6, 8], 7)).toBe(-1);
    });
});
