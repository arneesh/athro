---
sidebar_position: 5
---

# Quick Sort

Pass the array of **numbers** which
needs to be sorted.

## Usage

```tsx title="src/sample/quicksort.ts"
import { quickSort } from 'athro';

const arr = [2, 6, 3, 8];

const result = quickSort(arr)
```

## Time Complexity
The time complexity of **Quick Sort** is:


| Case | Time Complexity  | Description |
| :---:   | :-: | :-: |
| Best | O(nlogn) | O(logn) decompositions and O(n) comparisons per decomposition  |
| Average | O(nlogn) | O(logn) decompositions and O(n) comparisons per decomposition |
| Worst | O(n<sup>2</sup>) | O(n) decompositions and O(n) comparisons per decomposition |

