function solve(eq){
    let nums = eq.split(/[*/+-]/).reverse();
    let symbols = eq.split(/[a-z,0-9]/).reverse().filter(el => el != "");
    let maxLength = Math.max(nums.length, symbols.length);
    let result = [];
    for (let i = 0; i < maxLength; i++) {
      result.push(nums[i]);
      result.push(symbols[i]);
    }
    return result.join("");
  }

  // OR

  const solve = eq =>
  eq.split(/([-+*/])/).reverse().join("");