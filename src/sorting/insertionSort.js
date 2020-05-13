

export const insertionSort = (nums) => {

for(var i=1 ; i < nums.length ; i++){
  var currentValue= nums[i];
  for(var j=i-1 ; j >=0 && nums[j] > currentValue ; j-- ){
      nums[j+1] = nums[j];
  }
  nums[j+1] = currentValue
}
  return nums;

}


// console.log("Insertion Sort :", insertionSort([2,4,1,5,6]))
