// Time complexcity: BigO(N LogN)
// Space complexcity: BigO(N)

let nums: number[] = [1, 2, 3];

let k = 3;
function subArraySum(nums: number[]) {
  let hashMap: Map<number, number> = new Map();
  let totalSubArrays = 0;

  let preSum = 0;

  hashMap.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];

    let remove = preSum - k;

    totalSubArrays +=
      typeof hashMap.get(remove) !== "number" ? 0 : hashMap.get(remove);

    hashMap.set(
      preSum,
      (typeof hashMap.get(preSum) !== "number" ? 0 : hashMap.get(preSum)) + 1
    );
  }
  return totalSubArrays;
}

console.log(subArraySum(nums));
