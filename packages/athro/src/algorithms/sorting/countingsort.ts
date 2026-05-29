export const countingSort = (arr: number[]): number[] => {
    if (arr.length === 0) return arr;

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const range = max - min + 1;
    const counts = new Array(range).fill(0);

    for (const value of arr) {
        counts[value - min]++;
    }

    let index = 0;
    for (let i = 0; i < range; i++) {
        while (counts[i] > 0) {
            arr[index] = i + min;
            index++;
            counts[i]--;
        }
    }

    return arr;
};
