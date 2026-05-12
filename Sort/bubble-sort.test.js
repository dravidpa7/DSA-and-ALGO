/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests.
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

// Random array - [10, 5, 3, 8, 2, 6, 4, 7, 9, 1] Works well
// function bubbleSort(nums) {
//   let n = nums.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (nums[j] > nums[j + 1]) {
//         // Swap elements
//         let temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//     }
//   }
//   return nums;
// }

// works well in sorted arrays
// function bubbleSort(nums) {
//   let swapped = false;
//   do{
//     swapped = false;
//     for(let i=0; i < nums.length - 1; i++){
//       if(nums[i]>nums[i+1]){
//         let temp = nums[i];
//         nums[i] = nums[i+1];
//         nums[i+1] = temp;
//         swapped = true;
//       }
//     }
//   }while(swapped);
//   return nums;
// }

function bubbleSort(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});