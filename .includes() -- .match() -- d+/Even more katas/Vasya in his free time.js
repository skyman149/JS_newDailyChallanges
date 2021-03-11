function CalculateString( n,  nums){
  
    while(nums.includes('10') || nums.includes('01')){
      nums = nums.replace(/10/g, '');
      nums = nums.replace(/01/g, '');
    }
    
    return nums.length;;
  }

  // OR without n

  function CalculateString( n,  nums){
    let countO = 0;
    let countI = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === "0") countO++;
      if (nums[i] === "1") countI++;
    }
    return Math.abs(countO - countI);
  }