function lastSurvivor(letters, coords) {
  
    let lettersArr = letters.split(''); // [ 'a', 'b', 'c' ]
    let res = [];                       // [1, 1];
    
    for (let i = 0; i < coords.length; i++) {
      lettersArr.splice(coords[i], 1);
    }
    
    return lettersArr.join('');
  }

  // OR

  function lastSurvivor(string, indices) {
    const arr = [...string];
    for (const i of indices) arr.splice(i, 1)
    return arr[0];
  }