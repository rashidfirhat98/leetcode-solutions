function findDisappearedNumbers(nums: number[]): number[] {
  
  //Mark numbers by negating the value at the corresponding index
  for(let num of nums) {
    const index = Math.abs(num) - 1
    nums[index] = -Math.abs(nums[index])
  }
  
  //Collect indices of positive value, which is the missing number
  const result = []
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0) {
      result.push(i + 1)
    }
  }
  
  return result
};