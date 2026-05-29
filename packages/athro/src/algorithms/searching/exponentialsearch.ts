export const exponentialSearch = (arr: number[], target: number): number => {
    if (arr.length === 0) return -1;
    if (arr[0] === target) return 0;

    let bound = 1;
    while (bound < arr.length && arr[bound] < target) {
        bound *= 2;
    }

    let low = Math.floor(bound / 2);
    let high = Math.min(bound, arr.length - 1);

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
};
