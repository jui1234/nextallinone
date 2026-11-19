//max sum 
var maxSubArray = function(nums) {
    let maxans=nums[0];
    for(let i=0;i<nums.length;i++){
            let store=0;

        for (let j=i;j<nums.length;j++){
        store+=nums[j];
        maxans=Math.max(maxans,store);
        }
        
    }
    return maxans;

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))