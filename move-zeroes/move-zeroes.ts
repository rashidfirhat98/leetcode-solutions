/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let temp
  let r = 1
  for(let i = 0; r < nums.length; i++){
    if(nums[i] === 0) {
      if(nums[r] !== 0) {
        temp = nums[i]
        nums[i] = nums[r]
        nums[r] = temp
        r--
      }
      i--
    }
    r++
  }
};