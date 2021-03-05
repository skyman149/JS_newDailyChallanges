function tidyNumber(n){
    let arr = (n + "").split("").sort((a, b) => a - b).join("");
    return parseInt(arr) === n;
  }