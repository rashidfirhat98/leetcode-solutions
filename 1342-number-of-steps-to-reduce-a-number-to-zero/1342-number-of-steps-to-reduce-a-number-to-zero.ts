function numberOfSteps(num: number): number {
    let steps: number = 0
    while (num > 0) {
        steps++
        if(num % 2 === 0){
            num = num/2
        } else {
            num -= 1
        }
    }
    return steps
};