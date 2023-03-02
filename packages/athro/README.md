

# Data Structures & Algorithms

A TS/JS javascript datastructures and algorithms library which is framework and environment agnostic. 
## Functionalities
This sections explains the functionalities provided by this library. This library can be used along with anyjavascript/nodejs framework framework/library such as Angular, React, Vue etc.

<span style="color:red">**Note:**</span> Generic will be removed from this library from version 2.0+

<span style="color:blue">**Note:**</span> All the imports mentioned in the sections below follow **Javascript ES6 Format**. If you want to use this library inside frameworks which still use **CommonJS** and do not support ES6 import/export you can use the library's functions in the traditional way - For Example:

```
var athro = require("athro");
athro.binarySearch(array,number);
```

### Searching
Searching functionalities inbuilt in this library are:

#### Binary Search
```
Pass the array of numbers/string along with the element which
needs to be found

import { binarySearch } from 'athro';
```
* **Syntax** - *params: binarySearch(array,element)*

#### Linear Search
```
Pass the array of numbers/string along with the element which
needs to be found

import { linearSearch } from 'athro';
```
* **Syntax** - *params: linearSearch(array,element)*

---

### Sorting
Sorting functionalities inbuilt in this library are:

#### Bubble Sort
```
Pass the array of numbers which needs to be sorted

import { bubbleSort } from 'athro';
```
* **Syntax** - *params: bubbleSort(array)*

#### Selection Sort
```
Pass the array of numbers/strings which needs to be sorted

import { selectionSort } from 'athro';
```
* **Syntax** - *params: selectionSort(array)*

#### Insertion Sort
```
Pass the array of numbers/strings which needs to be sorted

import { insertionSort } from 'athro';
```
* **Syntax** - *params: insertionSort(array)*

#### Merge Sort
```
Pass the array of numbers/strings which needs to be sorted

import { mergeSort } from 'athro';
```
* **Syntax** - *params: mergeSort(array)*

#### Quick Sort
```
Pass the array of numbers/strings which needs to be sorted

import { quickSort } from 'athro';
```
* **Syntax** - *params: quickSort(array)*


---

### Data Structures
Some famous useful data structure:

#### Singly Linked List
```
Usage: import and use the class through its instance methods

import { SinglyLinkedList } from 'athro';

var list = new SinglyLinkedList();

```

| Methods | Usage  | Syntax  |
| :---:   | :-: | :-: |
| insert | Add item to SLL | list.insert(index,value) |
| remove | Remove item from SLL | list.remove(index) |
| get | Get item from SLL | list.get(index) |
| set | Update value of item in SLL | list.set(index,value) |
| reverse | Reverse the entire SLL | list.reverse() |


#### Doubly Linked List
```
Usage: import and use the class through its instance methods

import { DoublyLinkedList } from 'athro';

var list = new DoublyLinkedList();

```

| Methods | Usage  | Syntax  |
| :---:   | :-: | :-: |
| insert | Add item to DLL | list.insert(index,value) |
| remove | Remove item from DLL | list.remove(index) |
| get | Get item from DLL | list.get(index) |
| set | Update value of item in DLL | list.set(index,value) |


#### Queue
```
Usage: import and use the class through its instance methods.
FIFO : Insert from "Rear" extract from "Front"

import { Queue } from 'athro';

var queue = new Queue();

```

| Methods | Usage  | Syntax  |
| :---:   | :-: | :-: |
| enqueue | Enqueue an item in the Queue from the rear | queue.enqueue(value) |
| dequeue | Dequeue an item from front of the Queue | queue.dequeue() |
| peek | View the item at front of Queue | queue.peek() |
| isEmpty | Check if the Queue is empty | queue.isEmpty() |


#### Stack
```
Usage: import and use the class through its instance methods.
LIFO Datastructure

import { Stack } from 'athro';

var stack = new Stack();

```

| Methods | Usage  | Syntax  |
| :---:   | :-: | :-: |
| push | Add an item to top of Stack | stack.push(value) |
| pop | Pop an item from top of stack | stack.pop() |
| top | View the item at top of Stack | stack.top() |
| isEmpty | Check if the Stack is empty | stack.isEmpty() |


#### Binary Search Tree
```
Usage: import and use the class through its instance methods.

import { BinarySearchTree } from 'athro';

var tree = new BinarySearchTree();

```

| Methods | Usage  | Syntax  |
| :---:   | :-: | :-: |
| insert | Add an item to the BST | tree.insert(value) |
| isPresent | Check if an item is present in the BST | tree.isPresent(value) |

---

### Tree Traversal
Some famous tree traversals:

#### Breadth First Search
```
Get the nodes of tree breadth/level wise

import { bfs } from 'athro';
```
* **Syntax** - *params: bfs(root)*

#### Depth First Search - In Order
```
Get the nodes of tree as per DFS in order format

import { inOrder } from 'athro';
```
* **Syntax** - *params: inOrder(root)*

#### Depth First Search - Pre Order
```
Get the nodes of tree as per DFS pre order format

import { preOrder } from 'athro';
```
* **Syntax** - *params: preOrder(root)*

#### Depth First Search - Post Order
```
Get the nodes of tree as per DFS post order format

import { postOrder } from 'athro';
```
* **Syntax** - *params: postOrder(root)*


## Miscellaneous

Follow Me On Medium [MyMedium](https://medium.com/@arneeshaima) for exciting Tech Blogs .
