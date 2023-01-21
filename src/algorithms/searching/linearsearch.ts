export const linearSearch = (arr: number[], number: number): number => {
    if (arr.length < 1) return -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) return i;
    }
    return -1;
};
