function firstToLast(str,c){
    if(str.lastIndexOf(c) === -1) return -1;
    if (str.lastIndexOf(c) === str.indexOf(c)) return 0;
    else return str.lastIndexOf(c) - str.indexOf(c)
  }

// OR very long solution:

function firstToLast(str,c){
    let count = 0;
    let index = str.indexOf(c);
    while(index !== -1){
      count++;
      index = str.indexOf(c, index + 1);
    }
    if (count === 1){return 0}
    if (count === 0){return -1}
    let first;
    let last;
    if (count > 1 ){
      for(let i = 0; i<str.length; i++){
        first = str.indexOf(c)+1
        last = str.lastIndexOf(c)+1
      }
    }
    return last - first;
  }