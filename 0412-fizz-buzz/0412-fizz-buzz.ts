function fizzBuzz(n: number): string[] {
    let finalArr : string[] = []
    for(let i = 1; i <= n; i++) {
        console.log(n)
        if(i % 3 === 0 && i % 5 === 0){
            finalArr.push('FizzBuzz')
        } else if(i % 3 === 0) {
            
            finalArr.push('Fizz')
        } else if(i % 5 === 0) {
            finalArr.push('Buzz')
        } else {
            finalArr.push(String(i))
        }
    }
    return finalArr
};