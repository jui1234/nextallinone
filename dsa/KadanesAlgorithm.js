//max sum using Kadane's Algorithm it is to find 
var maxSubArray = function(nums) {
   let maxsum=nums[0];
   let currentsum=nums[0];

   for(let i=0;i<nums.length;i++){
        currentsum=Math.max(nums[i],currentsum+nums[i]);//this 2 split 
        maxsum=Math.max(maxsum,currentsum);
   }
   return maxsum;

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))