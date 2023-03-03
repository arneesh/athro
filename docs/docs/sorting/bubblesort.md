---
sidebar_position: 1
---

# Bubble Sort

Pass the array of **numbers** which
needs to be sorted.

## Usage

```tsx title="src/sample/bubblesort.ts"
import { bubbleSort } from 'athro';

const arr = [2, 6, 3, 8];

const result = bubbleSort(arr)
```

## Time Complexity
The time complexity of **Bubble Sort** is:


| Case | Time Complexity  | Description |
| :---:   | :-: | :-: |
| Best | O(n) | When the data is already sorted upto some extent |
| Average | O(n<sup>2</sup>) | n comparisons for n items |
| Worst | O(n<sup>2</sup>) | n comparisons for n items |