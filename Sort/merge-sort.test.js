/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if(nums.length <= 1){
    return nums;
  }
  const mid = Math.floor(nums.length/2);
  const left = mergeSort(nums.slice(0, mid));
  const right = mergeSort(nums.slice(mid));
  return merge(left, right);
};

// const merge = (left, right) => {
//   const merged = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while(leftIndex < left.length && rightIndex < right.length){
//     if(left[leftIndex] < right[rightIndex]){
//       merged.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       merged.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   // Push any remaining elements from either left or right
//   return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// };

const merge = (left, right) => {
  const results = [];

  // go until one list runs outs
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift removes the first element in an array and returns it
      // it's like .pop() for the front
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // either left or right will be empty so you can safely concat both
  return results.concat(left, right);
};


// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// slice() vs. splice()While they sound similar, they are very different:slice(): 
// Purely for copying; it does not change the original data.splice(): 
// Mutates the original array by removing or adding elements in place.