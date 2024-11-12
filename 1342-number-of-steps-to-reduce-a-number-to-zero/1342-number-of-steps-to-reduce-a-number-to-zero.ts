function numberOfSteps(num: number): number {
    let steps = 0
    for(let i = 1; num > 0; i++) {
        if(num % 2 === 0){
            num = num/2
        } else {
            num -= 1
        }
        steps = i
    }
    return steps
};