//Time complexcity BigO(N)

// Given array of numbers and target value
const _numsArr: number[] = [2, 7, 11, 15];
const _target = 9;

// Function to find two indices whose values sum up to the target
function TwoSumBetter(nums: number[]) {
  // Start with two pointers: one at the beginning (i) and one at the end (j) of the array
  let i = 0;
  let j = nums.length - 1;

  // Keep iterating as long as the two pointers don't meet
  while (i < j) {
    // If the sum of the numbers at the two pointers is greater than the target
    if (nums[i] + nums[j] > _target) {
      // Move the right pointer (j) left to reduce the sum
      j--;
    }
    // If the sum is smaller than the target
    else if (nums[i] + nums[j] < _target) {
      // Move the left pointer (i) right to increase the sum
      i++;
    }
    // If the sum equals the target, return the indices of the two numbers
    else {
      return [i, j];
    }
  }

  // If no pair is found, return an empty array
  return [];
}

// Testing the function with the given array and target
console.log(TwoSumBetter(_numsArr));
