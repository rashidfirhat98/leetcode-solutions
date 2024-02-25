function sortedSquares(nums: number[]): number[] {
  const squaredArr : number[] = []
  for(let i = 0; i < nums.length; i++){
    squaredArr.push(nums[i]*nums[i])
  }
  squaredArr.sort(function (a, b) { return a - b });
  return squaredArr
};