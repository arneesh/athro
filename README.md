

# Data Structures | Algorithms | Generics

A library for typescript/javascript which contains basic data structures, algorithms and some generic functions.
## Functionalities
This sections explains the functionalities provided by this library. This library can be used along with any other javascript framework/library such as Angular, React, Vue etc.

**Note:** All the imports mentioned in the sections below follow **Javascript ES6 Format**. If you want to use this library inside frameworks which still use **CommonJS** and do not support ES6 import/export you can use the library's functions in the traditional way - For Example:

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
Pass the array of numbers/strings which needs to be sorted

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
| find | Find an item in the BST | tree.find(value) |

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


---

### Generics
Some generic functions which are often useful while development - saves time:

#### Title Case
```
Pass a string to convert to title case i.e "hello world  => Hello World"

import { titleCase } from 'athro';
```
* **Syntax** - *params: titleCase(array)*

#### Decimal Handler
```
Pass a decimal/floating point number and decimal places upto which you want to round it to

import { handleDecimal } from 'athro';
```
* **Syntax** - *params: handleDecimal(number,decimal)*

#### Beautify Date
```
Pass date object to convert it to -> sample : Jan 21 2020 format (Month Day Year)

import { beautifyDate } from 'athro';
```
* **Syntax** - *params: beautifyDate(date)*

#### Beautify Number
```
Pass number to convert to to a much more readable format -> sample : 10186438.12 gets converted to 10,186,438

import { beautifyNumber } from 'athro';
```
* **Syntax** - *params: beautifyNumber(number)*


#### Currency Symbol
```
Pass currency code to return the symbol for the currency -> sample : USD gets converted to $

import { currencySymbol } from 'athro';
```
* **Syntax** - *params: currencySymbol(code)*

#### Array Remove Duplicates
```
Pass an array to the function and duplicates values would be removed from the array that is returned.

import { arrayRemoveDuplicates } from 'athro';
```
* **Syntax** - *params: arrayRemoveDuplicates(array)*

#### Array Difference
```
Pass two arrays to the function and their difference is returned -> sample : pass ([1,2,6,9,4,3],[1,2,6,3]) returned array is [9,4].

import { arrayDifference } from 'athro';
```
* **Syntax** - *params: arrayDifference(array1,array2)*

#### Count Occurrences
```
Pass an array and an element to count the occurrences of that element in the array.

import { countOccurrences } from 'athro';
```
* **Syntax** - *params: countOccurrences(array,element)*

#### Bifurcate Array
```
Pass an array and a bifurcation function by which the array is supposed to be converted into two separate arrays.
sample -> passing (['chair', 'chart', 'chin', 'king'], x => x[0] === 'c') returns [ ['chair', 'chart', 'chin'], ['king'] ]

import { bifurcateArray } from 'athro';
```
* **Syntax** - *params: bifurcateArray(array,fn)*


## Miscellaneous

Follow Me On Medium [MyMedium](https://medium.com/@arneeshaima) for exciting Tech Blogs .
