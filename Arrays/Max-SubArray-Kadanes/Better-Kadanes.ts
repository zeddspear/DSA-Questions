// Time complexcity: BigO(N)

const numsArr: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Input array of integers

function findMaxSubArr(numsArr: number[]) {
  let maxSum = Number.MIN_VALUE; // Initialize maxSum with the smallest possible value
  let start = -1; // Variable to store the starting index of the maximum subarray
  let ansStart = -1; // Variable to store the starting index of the maximum answer subarray
  let ansEnd = -1; // Variable to store the ending index of the maximum answer subarray

  let intervalSum = 0; // Variable to store the sum of the current subarray

  // Iterate over the entire array to calculate maximum sum subarray
  for (let i = 0; i < numsArr.length; i++) {
    if (intervalSum === 0) {
      start = i; // Set the start to i means its a new subArray start
    }

    intervalSum += numsArr[i]; // Add the current element to the subarray sum

    // If the current subarray sum exceeds the max sum, update maxSum and the end point
    if (intervalSum > maxSum) {
      maxSum = intervalSum; // Update the maximum sum
      ansStart = start;
      ansEnd = i; // Update the end index of the subarray
    }

    // If the subarray sum becomes negative or zero, reset the sum and move the start point
    if (intervalSum <= 0) {
      intervalSum = 0; // Reset the interval sum
    }
  }

  if (maxSum < 0) {
    maxSum = 0;
  }

  // Output the indices of the subarray
  console.log("Start: ", ansStart, "End: ", ansEnd); // Print the start and end indices of the maximum subarray

  return maxSum; // Return the maximum sum
}

console.log("Max: ", findMaxSubArr(numsArr)); // Call the function and print the result
