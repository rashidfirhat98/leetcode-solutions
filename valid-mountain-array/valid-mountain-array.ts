function validMountainArray(arr: number[]): boolean {
  let right = 1
  
  if(arr.length < 3 || arr[0] > arr[1]){
    return false
  }
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[right]){
      return false
    }
    //found the peak
    if(arr[i] > arr[right]) {
      while(right < arr.length) {
        i++
        right++
        if(arr[right] >= arr[i]) {
          return false
        }
      }
      return true
    }
    right++
  }
  return false
};