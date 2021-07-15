/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    
    if (!nums.length) return 0; // if empty return 0
      
    let curr_max = nums[0],
        max_so_far = nums[0];
  
    for (let i = 1; i < nums.length; i++) {  
      curr_max = Math.max(nums[i], curr_max + nums[i]);
      max_so_far = Math.max(curr_max, max_so_far);
    }
      
    return max_so_far;
      
  };