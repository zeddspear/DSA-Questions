// Time complexcity: BigO(N)

const numsArr: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Input array of integers

function findMaxSubArr(numsArr: number[]) {
  let maxSum = Number.MIN_VALUE; // Initialize maxSum with the smallest possible value
  let start = 0; // Variable to store the starting index of the maximum subarray
  let end = 0; // Variable to store the ending index of the maximum subarray
  let intervalSum = 0; // Variable to store the sum of the current subarray

  // Iterate over the entire array to calculate maximum sum subarray
  for (let i = 0; i < numsArr.length; i++) {
    intervalSum += numsArr[i]; // Add the current element to the subarray sum

    // If the current subarray sum exceeds the max sum, update maxSum and the end point
    if (intervalSum > maxSum) {
      maxSum = intervalSum; // Update the maximum sum
      end = i; // Update the end index of the subarray
    }

    // If the subarray sum becomes negative or zero, reset the sum and move the start point
    if (intervalSum <= 0) {
      intervalSum = 0; // Reset the interval sum
      start = i + 1; // Set the start to the next index
    }
  }

  // Output the indices of the subarray
  console.log("Start: ", start, "End: ", end); // Print the start and end indices of the maximum subarray

  return maxSum; // Return the maximum sum
}

console.log("Max: ", findMaxSubArr(numsArr)); // Call the function and print the result
