// Time complexcity: BigO(2N)
// Space complexcity: BigO(1)

// This is the most optimal for numbers positive or 0s but not if array has negatives

let nums: number[] = [2, 3, 5, 1, 9];

let k = 10;

function findLongestSubarray(nums: number[]) {
  let longestSubarray = 0;

  let current = 0;
  let prev = 0;

  let sum = nums[0];

  while (current < nums.length) {
    while (prev <= current && sum > k) {
      sum -= nums[prev];
      prev++;
    }

    if (sum === k) {
      longestSubarray = Math.max(longestSubarray, current - prev + 1);
    }

    current++;
    if (current < nums.length) {
      sum += nums[current];
    }
  }

  return longestSubarray;
}

console.log(findLongestSubarray(nums));
