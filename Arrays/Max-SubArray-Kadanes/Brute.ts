// Time complexcity: BigO(N^2)

const numsArr: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function findMaxSubArr(numsArr: number[]) {
  let maxSum = 0;

  let start = 0;
  let end = 0;

  // Outer loop iterates through each starting point of the subarray
  for (let i = 0; i < numsArr.length; i++) {
    let intervalSum = 0;

    // Inner loop iterates through each ending point of the subarray
    for (let j = i; j < numsArr.length; j++) {
      intervalSum += numsArr[j];
      //   maxSum = Math.max(intervalSum, maxSum);
      if (maxSum < intervalSum) {
        end = j;
        start = i;
        maxSum = intervalSum;
      }
    }
  }

  return maxSum;
}

console.log("Max: ", findMaxSubArr(numsArr));
