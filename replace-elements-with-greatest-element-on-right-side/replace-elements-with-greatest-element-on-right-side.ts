function replaceElements(arr: number[]): number[] {
  let i = 0

  if(arr.length === 0) {
    return null
  }
  
  while(i < arr.length) {
    let right = i + 1
    let highestNum = 0
    while(right < arr.length) {
      if(arr[right] > highestNum) {
        highestNum = arr[right]
      }
      arr[i] = highestNum
      right++
    }
    if(i === arr.length - 1) {
      arr[i] = -1
    }
    i++
  }
  return arr
};