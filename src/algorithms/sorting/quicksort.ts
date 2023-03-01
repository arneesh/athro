function swap(array: number[], i: number, j: number) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition(array: number[], start = 0, end = array.length - 1) {
    var pivot = array[start];
    var swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > array[i]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }

    swap(array, start, swapIndex);
    return swapIndex;
}

export const quickSort = (arr: number[], left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
};
