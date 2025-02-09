// Time complexcity: BigO(n^2)
// Space complexcity: BigO(1)

let nums: number[] = [3, 1, 3, 4, 2];

function findDuplicate(nums: number[]) {
  let repeatedNumber = 0;

  // First we will iterate over the array index and select 1 number and compare it with the others
  for (let i = 0; i < nums.length; i++) {
    // This is the inner loop for comparing the selected number with others
    for (let j = i + 1; j < nums.length; j++) {
      if (j > nums.length) {
        break;
      }

      if (nums[i] === nums[j]) {
        repeatedNumber = nums[i];
        return repeatedNumber;
      }
    }
  }

  return null;
}

let duplicate = findDuplicate(nums);

if (duplicate) {
  console.log(`This is repeated number: ${duplicate}`);
} else {
  console.log("No repeated number found");
}
