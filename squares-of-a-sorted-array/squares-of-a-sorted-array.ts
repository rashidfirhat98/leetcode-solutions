function sortedSquares(nums: number[]): number[] {
  const squaredArr : number[] = []
  for(let i = 0; i < nums.length; i++){
    squaredArr.push(nums[i]*nums[i])
  }
  for(let j = 0; j < squaredArr.length; j++) {
    let k = j + 1
    while( k < squaredArr.length ) {
      if( squaredArr[k] < squaredArr[j]) {
        let indexNum = squaredArr[k]
        squaredArr[k] = squaredArr[j]
        squaredArr[j] = indexNum
      }
      k++
    }
    
    
  }
  return squaredArr
};