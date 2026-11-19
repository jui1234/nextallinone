/ Your task is to:
// - Buy the stock on one day.
// - Sell it on a future day.
// - Get the maximum possible profit.
// let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function(prices) {
let buy=Infinity;
let final=0;

for(let i=0;i<prices.length;i++){
    buy=Math.min(buy,prices[i]);
    let sell=prices[i]-buy;

     final=Math.max(final,sell);
}
return final;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))