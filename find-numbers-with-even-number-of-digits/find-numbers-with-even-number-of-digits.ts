function findNumbers(nums: number[]): number {
  let numOfDigit: number = 0
  let numOfEvens: number = 0
    for(let i = 0; i < nums.length; i++) {
      let dividedNum: number = nums[i]
       while(dividedNum >= 1 && dividedNum !== 10) {
         dividedNum = dividedNum / 10
         numOfDigit = numOfDigit + 1
       }
        if (numOfDigit % 2 === 0) {
          numOfEvens = numOfEvens + 1
        }
      numOfDigit = 0
    }
  return numOfEvens
};