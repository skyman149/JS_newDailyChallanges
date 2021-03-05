const removeConsecutiveDuplicates = s => {
    let arr = s.split(" "),
        newStr = [];
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== arr[i + 1]) {
            newStr.push(arr[i]);
          }
      }
    return newStr.join(" ");
  }