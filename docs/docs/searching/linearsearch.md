---
sidebar_position: 1
---

# Linear Search

Pass the array of **numbers/string** along with the element which
needs to be found.

## Usage

```tsx title="src/sample/linearsearch.ts"
import { linearSearch } from 'athro';

const arr = [2, 6, 3, 8];
const target = 6;

const result = linearSearch(arr, target)
```

## Time Complexity
The time complexity of **Linear Search** is:


| Case | Time Complexity  | Description |
| :---:   | :-: | :-: |
| Best | O(1) | When the element is found at the 1st index |
| Average | O(n) | When the elment is found at any index between 1 to n |
| Worst | O(n) | When the elelemnt is found at the last index |
