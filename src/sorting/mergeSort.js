

export const mergeSort = (arr) => {

  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left,right);
};


function merge(arr1,arr2){

  let result =[];
  let i=0;
  let j=0;

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++
    }
  }

  while(i < arr1.length){
    result.push(arr1[i]);
    i++;
  }

  while(j < arr2.length){
    result.push(arr2[j]);
    j++;
  }

  return result;

};



// console.log("Merge: ", merge([1,3,5,7],[2,6,10,55] ));

// console.log("Merge sort: ", mergeSort([1,3,5,2,7,2,6,10,55,99] ));
