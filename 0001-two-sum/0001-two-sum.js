/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output = []
    for(let i=0; i<nums.length; i++ ){
        for(let j=i+1; j<nums.length; j++){
         if(target == nums[i]+nums[j]){
            output.push(i,j)
            return output;
         }
        }
    }
    console.log(output)
};