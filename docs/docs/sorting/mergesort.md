---
sidebar_position: 4
---

# Merge Sort

Pass the array of **numbers** which
needs to be sorted.

## Usage

```tsx title="src/sample/mergesort.ts"
import { mergeSort } from 'athro';

const arr = [2, 6, 3, 8];

const result = mergeSort(arr)
```

## Time Complexity
The time complexity of **Merge Sort** is:


| Case | Time Complexity  | Description |
| :---:   | :-: | :-: |
| Best | O(nlogn) | O(logn) decompositions and O(n) comparisons per decomposition  |
| Average | O(nlogn) | O(logn) decompositions and O(n) comparisons per decomposition |
| Worst | O(nlogn) | O(logn) decompositions and O(n) comparisons per decomposition |

