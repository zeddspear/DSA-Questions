// Time complexcity: BigO(n)
// Space complexcity: BigO(1)

let nums: number[] = [0, 1, 0, 3, 12];

function moveZeros(nums: number[]) {
  let nonZeroIndex = 0; // Pointer to place the next non-zero element

  // Move all non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining positions with zeros
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log("Result array: ", moveZeros(nums));
