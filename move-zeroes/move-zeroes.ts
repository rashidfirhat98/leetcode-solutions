/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

  let i = 0
  for(let r = 0; r < nums.length; r++){
    if(nums[r]) {
      [nums[r], nums[i]] = [nums[i], nums[r]]
      i++
    }
  }
};