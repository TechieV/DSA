/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let i = 0;
let k = 1;
let j = 1;
while(j < nums.length){
    if(nums[j] == nums[j-1]){
        j++;
        continue;

    }
   else{
        nums[i+1] = nums[j];
        i++;
        k++;
        j++
    }
   
}
       return k;
};
