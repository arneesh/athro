export interface ArrayStep {
  array: number[];
  compare?: [number, number];
  swap?: [number, number];
  highlight?: number[];
  sortedFrom?: number;
  pivot?: number;
  partitionRange?: [number, number];
  found?: number;
  low?: number;
  high?: number;
  mid?: number;
  description: string;
}

export interface TreeNode {
  value: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
}

export interface TreeStep {
  visited: number[];
  current?: number;
  queue?: number[];
  description: string;
}

export interface StackQueueStep {
  items: number[];
  action?: 'push' | 'pop' | 'enqueue' | 'dequeue' | 'peek';
  value?: number;
  highlight?: number;
  description: string;
}

const pushStep = (steps: ArrayStep[], array: number[], description: string, extra: Partial<ArrayStep> = {}) => {
  steps.push({ array: [...array], description, ...extra });
};

export function generateBubbleSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  pushStep(steps, arr, 'Starting array');

  for (let i = arr.length; i > 0; i--) {
    let noswaps = true;
    for (let j = 0; j < i - 1; j++) {
      pushStep(steps, arr, `Compare ${arr[j]} and ${arr[j + 1]}`, {
        compare: [j, j + 1],
        sortedFrom: i,
      });
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        pushStep(steps, arr, `Swap positions ${j} and ${j + 1}`, {
          swap: [j, j + 1],
          sortedFrom: i,
        });
        noswaps = false;
      }
    }
    if (noswaps) {
      pushStep(steps, arr, 'No swaps — array is sorted', { sortedFrom: 0 });
      break;
    }
    pushStep(steps, arr, `Element at index ${i - 1} is in final position`, { sortedFrom: i - 1 });
  }

  pushStep(steps, arr, 'Sort complete', { sortedFrom: 0 });
  return steps;
}

export function generateInsertionSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  pushStep(steps, arr, 'Starting array');

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    pushStep(steps, arr, `Select ${current} at index ${i}`, { highlight: [i] });

    while (j >= 0 && arr[j] > current) {
      pushStep(steps, arr, `Shift ${arr[j]} right`, { compare: [j, j + 1], highlight: [j] });
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
    pushStep(steps, arr, `Insert ${current} at index ${j + 1}`, { highlight: [j + 1] });
  }

  pushStep(steps, arr, 'Sort complete', { sortedFrom: 0 });
  return steps;
}

export function generateSelectionSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  pushStep(steps, arr, 'Starting array');

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    pushStep(steps, arr, `Find minimum from index ${i}`, { highlight: [i] });

    for (let j = i + 1; j < arr.length; j++) {
      pushStep(steps, arr, `Compare ${arr[j]} with current minimum ${arr[minIndex]}`, {
        compare: [minIndex, j],
        highlight: [minIndex],
      });
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        pushStep(steps, arr, `New minimum: ${arr[minIndex]}`, { highlight: [minIndex] });
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      pushStep(steps, arr, `Swap ${arr[i]} into position ${i}`, { swap: [i, minIndex], sortedFrom: i + 1 });
    } else {
      pushStep(steps, arr, `${arr[i]} already in place`, { sortedFrom: i + 1 });
    }
  }

  pushStep(steps, arr, 'Sort complete', { sortedFrom: 0 });
  return steps;
}

export function generateMergeSortSteps(input: number[]): ArrayStep[] {
  const steps: ArrayStep[] = [];

  const merge = (array: number[], start: number, mid: number, end: number) => {
    const left = array.slice(start, mid + 1);
    const right = array.slice(mid + 1, end + 1);
    pushStep(steps, array, `Merge subarrays [${left.join(', ')}] and [${right.join(', ')}]`, {
      highlight: Array.from({ length: end - start + 1 }, (_, i) => start + i),
    });

    let i = 0;
    let j = 0;
    let k = start;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        array[k] = left[i];
        pushStep(steps, array, `Take ${left[i]} from left half`, { highlight: [k] });
        i++;
      } else {
        array[k] = right[j];
        pushStep(steps, array, `Take ${right[j]} from right half`, { highlight: [k] });
        j++;
      }
      k++;
    }

    while (i < left.length) {
      array[k] = left[i];
      pushStep(steps, array, `Copy remaining ${left[i]} from left`, { highlight: [k] });
      i++;
      k++;
    }

    while (j < right.length) {
      array[k] = right[j];
      pushStep(steps, array, `Copy remaining ${right[j]} from right`, { highlight: [k] });
      j++;
      k++;
    }
  };

  const sort = (array: number[], start: number, end: number) => {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    pushStep(steps, array, `Divide range [${start}..${end}] at midpoint ${mid}`, {
      partitionRange: [start, end],
    });
    sort(array, start, mid);
    sort(array, mid + 1, end);
    merge(array, start, mid, end);
  };

  const arr = [...input];
  pushStep(steps, arr, 'Starting array');
  sort(arr, 0, arr.length - 1);
  pushStep(steps, arr, 'Sort complete', { sortedFrom: 0 });
  return steps;
}

export function generateQuickSortSteps(input: number[]): ArrayStep[] {
  const steps: ArrayStep[] = [];

  const partition = (array: number[], low: number, high: number): number => {
    const pivot = array[high];
    pushStep(steps, array, `Choose pivot ${pivot}`, { pivot: high, partitionRange: [low, high] });

    let i = low - 1;
    for (let j = low; j < high; j++) {
      pushStep(steps, array, `Compare ${array[j]} with pivot ${pivot}`, {
        compare: [j, high],
        pivot: high,
        partitionRange: [low, high],
      });
      if (array[j] < pivot) {
        i++;
        if (i !== j) {
          [array[i], array[j]] = [array[j], array[i]];
          pushStep(steps, array, `Swap ${array[i]} left of pivot partition`, {
            swap: [i, j],
            pivot: high,
            partitionRange: [low, high],
          });
        }
      }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    pushStep(steps, array, `Place pivot ${pivot} at index ${i + 1}`, {
      pivot: i + 1,
      partitionRange: [low, high],
    });
    return i + 1;
  };

  const sort = (array: number[], low: number, high: number) => {
    if (low < high) {
      const pivotIndex = partition(array, low, high);
      sort(array, low, pivotIndex - 1);
      sort(array, pivotIndex + 1, high);
    }
  };

  const arr = [...input];
  pushStep(steps, arr, 'Starting array');
  sort(arr, 0, arr.length - 1);
  pushStep(steps, arr, 'Sort complete', { sortedFrom: 0 });
  return steps;
}

export function generateLinearSearchSteps(array: number[], target: number): ArrayStep[] {
  const steps: ArrayStep[] = [];
  pushStep(steps, array, `Search for ${target}`);

  for (let i = 0; i < array.length; i++) {
    pushStep(steps, array, `Check index ${i}: ${array[i]}`, { highlight: [i] });
    if (array[i] === target) {
      pushStep(steps, array, `Found ${target} at index ${i}`, { found: i, highlight: [i] });
      return steps;
    }
  }

  pushStep(steps, array, `${target} not found`, {});
  return steps;
}

export function generateBinarySearchSteps(array: number[], target: number): ArrayStep[] {
  const steps: ArrayStep[] = [];
  pushStep(steps, array, `Search for ${target} in sorted array`);

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    pushStep(steps, array, `Search range [${low}..${high}], check middle index ${mid}`, {
      low,
      high,
      mid,
      highlight: [mid],
    });

    if (array[mid] === target) {
      pushStep(steps, array, `Found ${target} at index ${mid}`, { found: mid, low, high, mid, highlight: [mid] });
      return steps;
    }

    if (target > array[mid]) {
      low = mid + 1;
      pushStep(steps, array, `${target} > ${array[mid]}, search right half`, { low, high, mid });
    } else {
      high = mid - 1;
      pushStep(steps, array, `${target} < ${array[mid]}, search left half`, { low, high, mid });
    }
  }

  pushStep(steps, array, `${target} not found`, { low, high });
  return steps;
}

export const DEMO_TREE: TreeNode = {
  value: 3,
  left: { value: 2 },
  right: {
    value: 7,
    left: { value: 4 },
    right: {
      value: 9,
      left: { value: 11 },
      right: { value: 16 },
    },
  },
};

export function generateBfsSteps(root: TreeNode | null): TreeStep[] {
  const steps: TreeStep[] = [{ visited: [], queue: [], description: 'Start BFS traversal' }];
  if (!root) return steps;

  const visited: number[] = [];
  const queue: TreeNode[] = [root];
  steps.push({ visited: [], queue: [root.value], description: 'Enqueue root node' });

  while (queue.length > 0) {
    const node = queue.shift()!;
    visited.push(node.value);
    steps.push({
      visited: [...visited],
      current: node.value,
      queue: queue.map((n) => n.value),
      description: `Visit ${node.value}`,
    });

    if (node.left) {
      queue.push(node.left);
      steps.push({
        visited: [...visited],
        queue: queue.map((n) => n.value),
        description: `Enqueue left child ${node.left.value}`,
      });
    }
    if (node.right) {
      queue.push(node.right);
      steps.push({
        visited: [...visited],
        queue: queue.map((n) => n.value),
        description: `Enqueue right child ${node.right.value}`,
      });
    }
  }

  steps.push({ visited: [...visited], description: 'Traversal complete' });
  return steps;
}

export function generateDfsSteps(
  root: TreeNode | null,
  order: 'pre' | 'in' | 'post',
): TreeStep[] {
  const steps: TreeStep[] = [{ visited: [], description: `Start ${order}-order DFS` }];
  const visited: number[] = [];

  const walk = (node: TreeNode | null | undefined) => {
    if (!node) return;

    if (order === 'pre') {
      visited.push(node.value);
      steps.push({ visited: [...visited], current: node.value, description: `Visit ${node.value}` });
    }

    if (node.left) {
      steps.push({ visited: [...visited], current: node.value, description: `Go left to ${node.left.value}` });
      walk(node.left);
    }

    if (order === 'in') {
      visited.push(node.value);
      steps.push({ visited: [...visited], current: node.value, description: `Visit ${node.value}` });
    }

    if (node.right) {
      steps.push({ visited: [...visited], current: node.value, description: `Go right to ${node.right.value}` });
      walk(node.right);
    }

    if (order === 'post') {
      visited.push(node.value);
      steps.push({ visited: [...visited], current: node.value, description: `Visit ${node.value}` });
    }
  };

  walk(root);
  steps.push({ visited: [...visited], description: 'Traversal complete' });
  return steps;
}

export function generateStackSteps(operations: Array<{ op: 'push' | 'pop'; value?: number }>): StackQueueStep[] {
  const items: number[] = [];
  const steps: StackQueueStep[] = [{ items: [], description: 'Empty stack' }];

  for (const { op, value } of operations) {
    if (op === 'push' && value !== undefined) {
      items.unshift(value);
      steps.push({
        items: [...items],
        action: 'push',
        value,
        highlight: 0,
        description: `Push ${value} onto stack`,
      });
    } else if (op === 'pop') {
      if (items.length === 0) {
        steps.push({ items: [], action: 'pop', description: 'Pop from empty stack' });
      } else {
        const removed = items.shift();
        steps.push({
          items: [...items],
          action: 'pop',
          value: removed,
          description: `Pop ${removed} from stack`,
        });
      }
    }
  }

  return steps;
}

export function generateQueueSteps(operations: Array<{ op: 'enqueue' | 'dequeue'; value?: number }>): StackQueueStep[] {
  const items: number[] = [];
  const steps: StackQueueStep[] = [{ items: [], description: 'Empty queue' }];

  for (const { op, value } of operations) {
    if (op === 'enqueue' && value !== undefined) {
      items.push(value);
      steps.push({
        items: [...items],
        action: 'enqueue',
        value,
        highlight: items.length - 1,
        description: `Enqueue ${value}`,
      });
    } else if (op === 'dequeue') {
      if (items.length === 0) {
        steps.push({ items: [], action: 'dequeue', description: 'Dequeue from empty queue' });
      } else {
        const removed = items.shift();
        steps.push({
          items: [...items],
          action: 'dequeue',
          value: removed,
          highlight: 0,
          description: `Dequeue ${removed}`,
        });
      }
    }
  }

  return steps;
}

export type SortAlgorithm = 'bubble' | 'insertion' | 'selection' | 'merge' | 'quick' | 'heap' | 'counting' | 'radix';

export function generateHeapSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  pushStep(steps, arr, 'Starting array');

  const heapify = (length: number, index: number) => {
    let largest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (left < length) {
      pushStep(steps, arr, `Compare node ${arr[index]} with left child ${arr[left]}`, {
        compare: [index, left],
        sortedFrom: length,
      });
      if (arr[left] > arr[largest]) largest = left;
    }
    if (right < length) {
      pushStep(steps, arr, `Compare node ${arr[largest]} with right child ${arr[right]}`, {
        compare: [largest, right],
        sortedFrom: length,
      });
      if (arr[right] > arr[largest]) largest = right;
    }

    if (largest !== index) {
      [arr[index], arr[largest]] = [arr[largest], arr[index]];
      pushStep(steps, arr, `Swap to maintain max heap`, { swap: [index, largest], sortedFrom: length });
      heapify(length, largest);
    }
  };

  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    pushStep(steps, arr, `Heapify subtree rooted at index ${i}`, { highlight: [i] });
    heapify(arr.length, i);
  }

  for (let end = arr.length - 1; end > 0; end--) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    pushStep(steps, arr, `Move max element to position ${end}`, { swap: [0, end], sortedFrom: end });
    heapify(end, 0);
  }

  pushStep(steps, arr, 'Sort complete', { sortedFrom: 0 });
  return steps;
}

export function generateCountingSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  pushStep(steps, arr, 'Starting array');

  if (arr.length === 0) return steps;

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min + 1;
  const counts = new Array(range).fill(0);

  for (const value of arr) {
    counts[value - min]++;
    pushStep(steps, arr, `Count value ${value}`, { highlight: [arr.indexOf(value)] });
  }

  let index = 0;
  for (let i = 0; i < range; i++) {
    while (counts[i] > 0) {
      arr[index] = i + min;
      pushStep(steps, arr, `Place ${i + min} at index ${index}`, { highlight: [index] });
      index++;
      counts[i]--;
    }
  }

  pushStep(steps, arr, 'Sort complete', { sortedFrom: 0 });
  return steps;
}

export function generateRadixSortSteps(input: number[]): ArrayStep[] {
  const arr = [...input];
  const steps: ArrayStep[] = [];
  pushStep(steps, arr, 'Starting array');

  if (arr.length === 0) return steps;

  const max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    pushStep(steps, arr, `Sort by digit place ${exp}`, { partitionRange: [0, arr.length - 1] });

    const output = new Array(arr.length).fill(0);
    const counts = new Array(10).fill(0);

    for (const value of arr) {
      counts[Math.floor(value / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) counts[i] += counts[i - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[counts[digit] - 1] = arr[i];
      counts[digit]--;
    }

    for (let i = 0; i < arr.length; i++) arr[i] = output[i];
    pushStep(steps, arr, `Completed pass for digit place ${exp}`, { sortedFrom: 0 });
  }

  pushStep(steps, arr, 'Sort complete', { sortedFrom: 0 });
  return steps;
}

export function generateSortSteps(algorithm: SortAlgorithm, input: number[]): ArrayStep[] {
  switch (algorithm) {
    case 'bubble':
      return generateBubbleSortSteps(input);
    case 'insertion':
      return generateInsertionSortSteps(input);
    case 'selection':
      return generateSelectionSortSteps(input);
    case 'merge':
      return generateMergeSortSteps(input);
    case 'quick':
      return generateQuickSortSteps(input);
    case 'heap':
      return generateHeapSortSteps(input);
    case 'counting':
      return generateCountingSortSteps(input);
    case 'radix':
      return generateRadixSortSteps(input);
  }
}
