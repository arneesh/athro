export const binarySearch = (arr: number[], num: number): number => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let middle = Math.floor(low + (high - low) / 2);
        if (num === arr[middle]) {
            return middle;
        }
        if (num > arr[middle]) {
            low = middle + 1;
        }
        if (num < arr[middle]) {
            high = middle - 1;
        }
    }
    return -1;
};
