// Time Complexity: O(N)

let nums: number[] = [1, 2, 3, 4];

function productOfArray(nums: number[]) {
  // Initialize the answer array with 1s
  let ansArray = new Array(nums.length).fill(1);
  let prefix = 1; // Initialize prefix product
  let suffix = 1; // Initialize suffix product

  // Calculate prefix products and store in ansArray
  for (let i = 0; i < nums.length; i++) {
    ansArray[i] = prefix; // Set the current index to prefix product
    prefix *= nums[i]; // Update the prefix product
  }

  // Calculate suffix products and multiply with current value in ansArray
  for (let j = nums.length - 1; j >= 0; j--) {
    ansArray[j] *= suffix; // Multiply the current index with suffix product
    suffix *= nums[j]; // Update the suffix product
  }

  return ansArray; // Return the array with the products
}

console.log(productOfArray(nums)); // Output the result
