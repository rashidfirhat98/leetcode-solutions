function findMaxConsecutiveOnes(nums: number[]): number {
  let consecutiveOnes: number = 0
  const arrayOfConsecutiveOnes: number[] = []
  let largest: number = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        consecutiveOnes = consecutiveOnes + 1;
      } else {
        consecutiveOnes = 0
      }
      if (consecutiveOnes !== 0) {
          arrayOfConsecutiveOnes.push(consecutiveOnes)
      }
    }

  for (let j = 0; j < arrayOfConsecutiveOnes.length; j++) {
    if (arrayOfConsecutiveOnes[j] > largest) {
      largest = arrayOfConsecutiveOnes[j]
    }
  }
  return largest
};