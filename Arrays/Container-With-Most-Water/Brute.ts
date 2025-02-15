// Time complexcity: BigO(n^2)
// Space complexcity: BigO(1)

let heights: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function containerWithMostWater(heights: number[]) {
  let res = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      // Min height * length in that interval
      let amount = Math.min(heights[i], heights[j]) * (j - i);

      // Max water in container
      res = Math.max(amount, res);
    }
  }

  return res;
}

console.log("Container with max water area: ", containerWithMostWater(heights));
