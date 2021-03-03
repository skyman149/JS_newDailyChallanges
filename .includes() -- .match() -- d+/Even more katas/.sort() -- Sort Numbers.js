function solution(nums){
  
    if (nums === null) return [];
    
    let res = nums.sort((a, b) => a - b);
    
    return res;
  }