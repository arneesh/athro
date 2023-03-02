---
sidebar_position: 2
---

# Doubly - Linked List

Create a **Doubly Linked List**.


## Usage

```tsx title="src/sample/linedlist.ts"
import { doublyLinkedList } from 'athro';

let list = new doublyLinkedList();
```

## Available Methods
Methods available for the **Doubly Linked List**.


| Methods | Description  | Syntax  |
| :---:   | :-: | :-: |
| push | Add item to the end of the DLL | list.push(value) |
| pop | Remove item from the end of the DLL | list.pop() |
| unshift | Add an item to the front of the DLL | list.unshift(value) |
| shift | Remove an item from the front of the DLL | list.shift() |
| get | Get a node from the DLL | list.get(index) |
| set | Set value for an existing node in the DLL | list.set(index, value) |
| insert | Insert a value at a specific index in the DLL | list.insert(index, value) |
| remove | Remove an item from specific position of the DLL | list.remove(index) |
| reverse | Reverse the DLL | list.reverse() |
| traverse | Traverse and print the DLL | list.traverse() |
