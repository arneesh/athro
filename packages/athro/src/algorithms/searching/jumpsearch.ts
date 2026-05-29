export const jumpSearch = (arr: number[], target: number): number => {
    if (arr.length === 0) return -1;

    const blockSize = Math.floor(Math.sqrt(arr.length));
    let step = blockSize;
    let prev = 0;

    while (arr[Math.min(step, arr.length) - 1] < target) {
        prev = step;
        step += blockSize;
        if (prev >= arr.length) return -1;
    }

    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, arr.length)) return -1;
    }

    return arr[prev] === target ? prev : -1;
};
