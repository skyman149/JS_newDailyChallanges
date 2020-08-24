function hydrate(arr){
    let total = 0;
    for (let i = 0; i<arr.length; i++){
      let num = parseInt(arr[i]);
      total += num;
    }
    return `${total*200} ml`;
  }