var gimme = function (inputArray) {
    let temp = inputArray.slice(0).sort((a,b) => a - b),
        mid = Math.round(temp.length/2) - 1
    return inputArray.indexOf(temp[mid]);
  };