function count(array){
    let obj = {};
    array.forEach(el => obj[el] ? obj[el]++ : obj[el] = 1);
    return obj;
  }
  // ---