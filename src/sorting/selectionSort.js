

export const selectionSort = (nums) => {

  let minIndex;
  for(let i=0  ; i < nums.length ; i++){
    minIndex=i;
    for(let j =i+1 ; j < nums.length ; j ++){
      if(nums[j] < nums[minIndex] ){
          minIndex = j;
      }
    }

    if(i != minIndex){
      let temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }
  }
return nums;

}



// console.log("Selection sort :", selectionSort([1,4,2,5,6]));
