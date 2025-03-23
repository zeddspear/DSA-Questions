// Time complexcity: BigO(N LogN )
// Space complexcity: BigO(N)

// This is the most optimal for all type of numbers positive,negative or 0s

let nums: number[] = [2, 3, 5, 1, 9];

let k = 10;

function findLongestSubarray(nums: number[]) {
  let hashMap: Map<number, number> = new Map();
  let longestSubarray = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      longestSubarray = Math.max(longestSubarray, i + 1);
    }

    let rem = sum - k;

    if (hashMap.has(rem)) {
      let len = hashMap.get(rem);
      longestSubarray = Math.max(longestSubarray, len);
    }

    if (!hashMap.has(rem)) {
      hashMap.set(sum, i);
    }
  }

  return longestSubarray;
}

console.log(findLongestSubarray(nums));
