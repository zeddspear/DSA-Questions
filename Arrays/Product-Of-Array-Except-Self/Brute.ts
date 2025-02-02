// Time Complexcity BigO(N^2)

let nums: number[] = [-1, 1, 0, -3, 3];

function productOfArray(nums: number[]) {
  let ansArray = []; // Initialize the array to store the results

  // Iterate through each element in the nums array
  for (let i = 0; i < nums.length; i++) {
    let product = 1; // Initialize product to 1 for each element
    // Iterate through the nums array again to calculate the product of all elements except the current one
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue; // Skip the current element
      }
      product *= nums[j]; // Multiply the product with the current element
    }
    if (product === 0) {
      ansArray.push(0);
    } else {
      ansArray.push(product); // Push the result into the ansArray
    }
  }

  return ansArray; // Return the array with the products
}

console.log(productOfArray(nums)); // Output the result
