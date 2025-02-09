// Time complexcity: BigO(n)
// Space complexcity: BigO(n)

let nums: number[] = [3, 1, 3, 4, 2];

function findDuplicate(nums: number[]) {
  let numberCounts = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (numberCounts.has(nums[i])) {
      // If the number is already in the map, it's a duplicate
      return nums[i];
    } else {
      // Otherwise, add the number to the map
      numberCounts.set(nums[i], 1);
    }
  }

  return null; // No duplicate found (though the problem guarantees one)
}

let duplicate = findDuplicate(nums);

if (duplicate) {
  console.log(`This is the repeated number: ${duplicate}`);
} else {
  console.log("No repeated number found");
}
