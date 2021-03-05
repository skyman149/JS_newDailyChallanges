const removeConsecutiveDuplicates = s => {
    let arr = s.split(" "),
        strArr = [];
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== arr[i + 1]) {
            strArr.push(arr[i]);
          }
      }
    return strArr.join(" ");
  }