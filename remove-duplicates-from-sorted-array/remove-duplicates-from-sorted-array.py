class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
      l = 0;
      length = len(nums)
      for r in nums:
        if nums[l] != r:
          l+=1
          nums[l] = r
        print(l)
      return l + 1