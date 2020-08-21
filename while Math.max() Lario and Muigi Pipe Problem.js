function pipeFix(numbers){
    let max = [];
    let maxNum = Math.max(...numbers);
    let i = numbers[0];
    while (i<=maxNum){
      max.push(i);
      i++;
    }
    return max;
  }
  console.log(pipeFix([1,2,3,5,6,8,9])); //[1...9]
  console.log(pipeFix([6,99])); // [6...99]