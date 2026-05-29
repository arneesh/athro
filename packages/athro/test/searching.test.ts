import { describe, it, expect } from 'vitest';
import { linearSearch, binarySearch, jumpSearch, exponentialSearch } from '../src';

const sorted = [1, 2, 5, 6, 8, 12, 18];

describe('linear search', () => {
    it('finds an existing value', () => {
        expect(linearSearch([1, 4, 2, 6, 3], 4)).toBe(1);
    });

    it('returns -1 for missing values', () => {
        expect(linearSearch([1, 4, 2, 6, 3], 9)).toBe(-1);
    });
});

describe('binary search', () => {
    it('finds an existing value', () => {
        expect(binarySearch(sorted, 5)).toBe(2);
    });

    it('returns -1 for missing values', () => {
        expect(binarySearch(sorted, 7)).toBe(-1);
    });
});

describe('jump search', () => {
    it('finds an existing value', () => {
        expect(jumpSearch(sorted, 12)).toBe(5);
    });

    it('returns -1 for missing values', () => {
        expect(jumpSearch(sorted, 7)).toBe(-1);
    });
});

describe('exponential search', () => {
    it('finds an existing value', () => {
        expect(exponentialSearch(sorted, 18)).toBe(6);
    });

    it('returns -1 for missing values', () => {
        expect(exponentialSearch(sorted, 7)).toBe(-1);
    });
});
