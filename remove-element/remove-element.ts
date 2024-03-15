function removeElement(nums: number[], val: number): number {
  let i = 0
  for(let r = 0; r < nums.length; r++) {
    if(nums[r] !== val) {
      nums[i] = nums[r]
      i++
    }
  }
  return i
}