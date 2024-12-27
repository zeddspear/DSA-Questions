//Time complexcity BigO(N^2)

const numsArr: number[] = [2, 7, 11, 15];
const target = 9;

function TwoSum(nums: number[]) {
  // We will traverse over an array index one by one
  for (let i = 0; i < nums.length; i++) {
    // Traversion again to check if the number on i index added to others and give target
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

console.log(TwoSum(numsArr));
