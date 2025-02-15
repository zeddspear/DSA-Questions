//Time Complexcity: BigO(n)
//Space Complexcity: BigO(n)

let heights: number[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function totalTrapRainWater(heights: number[]) {
  // Step 1: Calculate prefixMax array
  let prefixMax = new Array<number>(heights.length).fill(0);
  prefixMax[0] = heights[0];

  // Max prefix means the max height till a specific index
  for (let i = 1; i < heights.length; i++) {
    prefixMax[i] = Math.max(prefixMax[i - 1], heights[i]);
  }

  // Step 2: Calculate suffixMax array
  let suffixMax = new Array<number>(heights.length).fill(0);
  suffixMax[heights.length - 1] = heights[heights.length - 1];

  for (let j = heights.length - 2; j >= 0; j--) {
    suffixMax[j] = Math.max(suffixMax[j + 1], heights[j]);
  }

  // Step 3: Calculate total trapped water
  let totalWater = 0;

  for (let i = 0; i < heights.length; i++) {
    let leftMax = prefixMax[i]; // Maximum height to the left of the current index
    let rightMax = suffixMax[i]; // Maximum height to the right of the current index

    // If the current height is less than both leftMax and rightMax, water can be trapped
    if (heights[i] < leftMax && heights[i] < rightMax) {
      totalWater += Math.min(leftMax, rightMax) - heights[i]; // Add trapped water
    }
  }

  return totalWater; // Return the total trapped water
}

console.log("Total Trap Rain Water: ", totalTrapRainWater(heights));
