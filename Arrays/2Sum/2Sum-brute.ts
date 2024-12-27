const numsArr: number[] = [2, 7, 11, 15];
const target = 9;

function TwoSum(nums: number[]) {
  // We will traverse over an array index one by one
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

console.log(TwoSum(numsArr));
