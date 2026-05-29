function heapify(array: number[], length: number, index: number): void {
    let largest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (left < length && array[left] > array[largest]) {
        largest = left;
    }
    if (right < length && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== index) {
        [array[index], array[largest]] = [array[largest], array[index]];
        heapify(array, length, largest);
    }
}

export const heapSort = (arr: number[]): number[] => {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }

    for (let end = arr.length - 1; end > 0; end--) {
        [arr[0], arr[end]] = [arr[end], arr[0]];
        heapify(arr, end, 0);
    }

    return arr;
};
