/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    
    let newIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[newIndex] = nums[i];
            newIndex++;
        }
    }
    
    return newIndex;
    
};