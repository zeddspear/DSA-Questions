// Time Complexcity BigO(N)

let nums: number[] = [1, 2, 3, 4];

function productOfArray(nums: number[]) {
  let ansArray = new Array(nums.length).fill(1);
  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < nums.length; i++) {
    ansArray[i] = prefix;
    prefix *= nums[i];
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    ansArray[j] *= suffix;
    suffix *= nums[j];
  }

  return ansArray; // Return the array with the products
}

console.log(productOfArray(nums)); // Output the result
