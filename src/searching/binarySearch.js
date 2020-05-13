


export default  binarySearch = (arr,num) =>{

  let low = 0;
  let high= arr.length -1 ;
  let middle;
  while( low <= high){

    middle = Math.floor(low + ((high-low)/2));
    if(num === arr[middle]){
      return middle;
    }
    if(num > arr[middle]){
      low = middle +1;
    }
     if (  num < arr[middle]) {
      high = middle-1;
    }

  }
  return -1;

}

// console.log("Element found : ", binarySearch([1,2,3,4,5], 7))
