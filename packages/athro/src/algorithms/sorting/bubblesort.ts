export const bubbleSort = (arr: number[]): number[] => {
    let noswaps: boolean;
    for (let i = arr.length; i > 0; i--) {
        noswaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noswaps = false;
            }
        }
        if (noswaps) break;
    }
    return arr;
};

