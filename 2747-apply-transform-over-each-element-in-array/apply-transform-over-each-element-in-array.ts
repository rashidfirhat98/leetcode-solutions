function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArr: number[] = []

    for(let x = 0; x < arr.length; x++) {
        newArr[x] = fn(arr[x], x) 
    }
    return newArr
};