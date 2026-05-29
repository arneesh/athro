# Athro

Algorithms and data structures for TypeScript and JavaScript, with interactive documentation for every algorithm.

<div align="center">

[![npm version](https://img.shields.io/npm/v/athro.svg)](https://www.npmjs.com/package/athro)
[![CI](https://github.com/arneesh/athro/actions/workflows/main.yaml/badge.svg?branch=master)](https://github.com/arneesh/athro/actions/workflows/main.yaml)
[![license](https://img.shields.io/npm/l/athro.svg)](https://github.com/arneesh/athro/blob/master/LICENSE)

[Documentation](https://athro-docs.vercel.app) · [Getting Started](https://athro-docs.vercel.app/Getting%20Started) · [npm](https://www.npmjs.com/package/athro) · [Issues](https://github.com/arneesh/athro/issues)

</div>

---

## Overview

Athro is a typed library of classic algorithms and data structures. It ships dual **CommonJS** and **ESM** builds with TypeScript declarations, and works in Node.js, Bun, Deno, and modern browsers.

Each algorithm in the [documentation](https://athro-docs.vercel.app) includes an interactive step-by-step visualization.

## Install

```bash
npm install athro
```

```bash
pnpm add athro
```

```bash
yarn add athro
```

## Quick example

```tsx
import { heapSort, Graph, graphBfs, dijkstra, HashMap, BinarySearchTree, bubbleSort } from 'athro';

// Sorting
bubbleSort([8, 3, 6, 2]);
heapSort([8, 3, 6, 1]);

// Hash map
const map = new HashMap<string, number>();
map.set('key', 42);
map.get('key'); // 42

// Graph
const graph = new Graph<string>(true);
graph.addEdge('A', 'B', 4);
graph.addEdge('B', 'C', 2);

graphBfs(graph, 'A');
dijkstra(graph, 'A', 'C');

// Binary search tree
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.isPresent(10); // true
```

## Usage

Import named exports from the package entry point:

```tsx
import { mergeSort, Stack, Queue } from 'athro';

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.pop();

mergeSort([4, 2, 7, 1, 3]);
```

Browse the full API with examples and visualizations in the [documentation](https://athro-docs.vercel.app).

## Compatibility

| Environment    | Supported |
| -------------- | --------- |
| Node.js        | Yes       |
| Bun            | Yes       |
| Deno           | Yes       |
| Browsers (ESM) | Yes       |

Requires a JavaScript runtime with ES2017 support.

## License

[MIT](./LICENSE) © [Arneesh Aima](https://github.com/arneesh)
