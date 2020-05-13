

export const  bubbleSort = (arr) =>{
  let noswaps;
  for(let i = arr.length -1 ; i  >=0 ; i--){
    noswaps = true;
    for(j=0 ; j < i-1 ; j ++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noswaps = false;
      }
    }
    if(noswaps) break;
  }
  return arr;
}


// console.log("Sorted array: ", bubbleSort([2,4,1,6,7]))
