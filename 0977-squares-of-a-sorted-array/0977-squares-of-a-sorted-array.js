/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sorted = [];
    for(let i=0; i<nums.length;i++){
        let square = nums[i]**2;
        sorted.push(square)

    }
    sorted = sorted.sort((a, b) => a - b); 
    return sorted;
};
