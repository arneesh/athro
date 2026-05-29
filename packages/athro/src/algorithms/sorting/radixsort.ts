const countingSortByDigit = (arr: number[], exp: number): void => {
    const output = new Array(arr.length).fill(0);
    const counts = new Array(10).fill(0);

    for (const value of arr) {
        const digit = Math.floor(value / exp) % 10;
        counts[digit]++;
    }

    for (let i = 1; i < 10; i++) {
        counts[i] += counts[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[counts[digit] - 1] = arr[i];
        counts[digit]--;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
};

export const radixSort = (arr: number[]): number[] => {
    if (arr.length === 0) return arr;

    const max = Math.max(...arr);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }

    return arr;
};
