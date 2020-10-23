// find unique value in given array (int only, arr.length >= 3)

function findUniq(arr) {
    let obj = {};
    
    for (let el of arr){
      if(obj[el]) obj[el]++;
      else obj[el] = 1;
    }
    
    let a = Object.entries(obj);
    let key = "";
    
    for(let i = 0; i < a.length; i++){
        if(a[i][1] === 1){
          key += a[i][0];
        }
    }
    return +key;
  }