/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    
    let newInd = 0; 

// if num !== val -> num with 0 index === this num, if num === val -> num stays at its index, if num !== val again for ex -> num with 1 index (BECAUSE newInd++) === this num;
// https://terriblewhiteboard.com/remove-element-leetcode-27/
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[newInd] = nums[i];
            newInd++;
        }
    }
    
    return newInd;
    
};