// Time complexcity: BigO(n)
// Space complexcity: BigO(1)

let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function containerWithMostWater(heights: number[]) {
  let left = 0; // Pointer at the start of the array
  let right = heights.length - 1; // Pointer at the end of the array
  let res = 0; // Variable to store the maximum area found

  while (left < right) {
    // Calculate the area of the container formed by the two pointers
    let water = Math.min(heights[left], heights[right]) * (right - left);

    // Update the maximum area found so far
    res = Math.max(water, res);

    // Move the pointer with the smaller height inward
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return res; // Return the maximum area
}

console.log("Container with max water area: ", containerWithMostWater(heights));
