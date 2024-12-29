// Time complexcity BigO(N^2)

let prices: number[] = [7, 1, 5, 3, 6, 4];

function findProfit(prices: number[]) {
  let maxProfit = Number.MIN_SAFE_INTEGER;

  // Iterate over all the elments and select the buying day one by one
  for (let i = 0; i < prices.length; i++) {
    // sell the stocks on every upcoming day to check the max profit
    for (let j = i + 1; j < prices.length; j++) {
      maxProfit = Math.max(prices[j] - prices[i], maxProfit);
    }
  }

  return maxProfit;
}

console.log("Max profit: ", findProfit(prices));
