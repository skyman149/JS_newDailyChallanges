/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    let insertInd = 0;
    
    for (let i = 0; nums[i] <= target; i++) insertInd = i;
    
  return nums[insertInd] >= target ? insertInd : insertInd + 1;
    
};