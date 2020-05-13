
 export const  linearSearch =  => (arr,number){

  if(arr.length <1) return -1;
  for(let i=0 ; i < arr.length ; i++){
    if(arr[i] == number) return i;
  }
return -1;
}


// console.log("Number index : ", linearSearch([1,4,2,6,3], 7))
