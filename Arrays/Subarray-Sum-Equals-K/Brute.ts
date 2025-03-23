// Time complexcity: BigO(N^2)

let nums: number[] = [1, 2, 3];

let k = 3;
function subArraySum(nums: number[]) {
  let totalSubArrays = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      // Inner loop first iteration it will be 1 and 2nd it will be 2 and in 3rd iteration it will be 3
      sum += nums[j];

      if (sum === k) {
        //if sum is equal to k increment the count
        totalSubArrays++;
      }
    }
  }
  return totalSubArrays;
}

console.log(subArraySum(nums));
