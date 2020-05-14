
function swap(array,i,j){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array,start = 0,end = array.length -1){

  var pivot = array[start];
  var swapIndex = start;

  for(let i=start+1 ; i <array.length ; i++){
    if(pivot > array[i]){
      swapIndex++;
      swap(array,swapIndex,i);
    }
  }

  swap(array,start,swapIndex);
  return swapIndex;

}

export const quickSort  = (arr, left =0 , right = arr.length -1 ) =>{

  if(left < right){
    let pivotIndex = partition(arr,left,right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1, right);
  }
  return arr;
}


// console.log("Quick Sort : ", quickSort([4,8,2,-30,1,5,7,6,3,-100,998]));
