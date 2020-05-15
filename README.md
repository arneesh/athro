

# Data Structures | Algorithms | Generics

A library for javascript which contains basic data structures, algorithms and some generic functions which a developer needs : UNDERCONSTRUCTION

**Note:** Kindly keep updating the library every now and them as I am constantly adding new stuff to the library almost on daily basis.

You can Update the library in your project by running the following command in the directory of your project which contains the file package.json  :
```
npm update 'athro';
```

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




## Author

* **Arneesh Aima** - *MySocials* - [LinkedIn](https://www.linkedin.com/in/arneesh-aima-49b516116/)

```
Experienced Full Stack/ML Engineer and passionate Blogger.
Highly skilled in Computer Vision, NLP, Statistical Analysis,
ReactJS, NodeJS, ELK Stack, Kubernetes.
```

Follow Me On Medium [MyMedium](https://medium.com/@arneeshaima) for exciting Tech Blogs .
