/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/
function getDigit(num, place, longetNumber) {
    return Math.floor(num / Math.pow(10, place)) % 10; 
}

function getLongestNumber(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        const numStr = nums[i].toString().length;
        if (numStr > max) {
            max = numStr;
        }
    }
    return max;
}

function radixSort(array) {
   // get the longest number
   const longest = getLongestNumber(array);

   // Crete a How many bukets do we need? 10 for 0-9
    const buckets = Array.from({ length: 10 }, () => []);

    // for loop how many iterations do we need to do? longest
    for (let i = 0; i < longest; i++) {
        // while Loop
        // enqueue the numbers into the buckets based on the digit at the current place value
        while (array.length > 0) {
            const num = array.shift();
            const digit = getDigit(num, i, longest);
            buckets[digit].push(num);
        }
        // for loop
        // Dequeue the numbers from the buckets and put them back into the array
        for (let j = 0; j < buckets.length; j++) {
            while (buckets[j].length > 0) {
                array.push(buckets[j].shift());
            }
        }
    }
    return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});