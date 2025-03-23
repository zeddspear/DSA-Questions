// Time complexcity: BigO(N^2)

let nums: number[] = [2, 3, 5, 1, 9];

let k = 10;

function findLongestSubarray(nums: number[]) {
  let longestSubarray = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        longestSubarray = Math.max(longestSubarray, j - i + 1);
      }
    }
  }

  return longestSubarray;
}

console.log(findLongestSubarray(nums));
