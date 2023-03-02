---
sidebar_position: 1
---

# Queue

Create a **Queue**.

## Usage

```tsx title="src/sample/queue.ts"
import { Queue } from 'athro';

let queue = new Queue();
```

## Available Methods
Methods available for **Queue**.


| Methods | Description  | Syntax  |
| :---:   | :-: | :-: |
| enqueue | Add item to the queue | queue.enqueue(value) |
| dequeue | Remove item from the queue | queue.dequeue() |
| peek | Get the value of item in the front of the queue | queue.peek() |
| isEmpty | Check if the queue is empty | queue.isEmpty() |
| getSize | Get size of the queue | queue.getSize() |

