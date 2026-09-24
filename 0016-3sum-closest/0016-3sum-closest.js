const threeSumClosest = function(nums, target) {
   nums = nums.sort((a, b) => a - b);
    let maxDiff = Number.MAX_VALUE;
    let closestSum = 0;
    for(let i = 0; i < nums.length-2; i++){
        let j = i+1;
        let k = nums.length-1;
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k];
            let diff = Math.abs(sum - target);

            if (diff < maxDiff) {
             maxDiff = diff;
             closestSum = sum
             
            }
            if(sum == target){
                return sum;
            }
           else if(sum < target){  
                j++;
            }
            else{
                k--;
            }
        }
    }
    return closestSum;
}