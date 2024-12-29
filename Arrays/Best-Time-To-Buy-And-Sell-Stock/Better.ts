// Time complexcity BigO(N)

let _prices: number[] = [7, 1, 5, 3, 6, 4];

function _findProfit(prices: number[]) {
  // Initialize maxProfit to the smallest possible number to track the maximum profit
  let maxProfit = Number.MIN_SAFE_INTEGER;

  // Assume the first day has the cheapest stock price for buying
  let cheapestStockPriceBought = prices[0];

  // Iterate through the prices array to evaluate the best day to sell for maximum profit
  for (let i = 0; i < prices.length; i++) {
    // Update the cheapestStockPriceBought if a new lower price is found
    cheapestStockPriceBought = Math.min(cheapestStockPriceBought, prices[i]);

    // Calculate the profit if selling on the current day, and update maxProfit if this is the highest profit so far
    maxProfit = Math.max(maxProfit, prices[i] - cheapestStockPriceBought);
  }

  // Return the maximum profit found
  return maxProfit;
}

console.log("Max profit: ", _findProfit(_prices));
