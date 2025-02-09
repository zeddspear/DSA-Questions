// Time complexcity: BigO(n logn)
// Space complexcity: BigO(1)

let nums: number[] = [1, 3, 4, 2, 2];

function findDuplicate(nums: number[]) {
  // Sort the array: O(n log n)
  let sortedArray = nums.sort((a, b) => a - b);

  // Iterate through the sorted array: O(n)
  for (let i = 1; i < nums.length; i++) {
    // Check if the current element is the same as the previous one
    if (sortedArray[i] === sortedArray[i - 1]) {
      return sortedArray[i]; // Duplicate found
    }
  }

  return null; // No duplicate found (though the problem guarantees one)
}

let duplicate = findDuplicate(nums);

if (duplicate) {
  console.log(`This is repeated number: ${duplicate}`);
} else {
  console.log("No repeated number found");
}
