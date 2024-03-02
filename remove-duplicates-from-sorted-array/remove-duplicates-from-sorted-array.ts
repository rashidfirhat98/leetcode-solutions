function removeDuplicates(nums: number[]): number {
  let l = 0
    for(let r = 0; r <= nums.length; r++){
      if(nums[l] !== nums[r]) {
        l++
        nums[l] = nums[r]
      }
    }
  return l
};