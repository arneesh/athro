---
sidebar_position: 2
---

# Binary Search

Pass a sorted array of **numbers/string** along with the element which
needs to be found.

## Usage

```tsx title="src/sample/binarysearch.ts"
import { binarySearch } from 'athro';

const arr = [2, 4, 6, 8];
const target = 6;

const result = binarySearch(arr, target)
```

:::danger Caution

Make sure the array passed is sorted. Binary Search algorithm only works on sorted arrays.

:::

