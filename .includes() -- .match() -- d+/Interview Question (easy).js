// my solution

function getStrings(city){
  
    let obj = {};
    
    city = city.toLowerCase().replace(/ /g,'');
    for (let el of city){
      if (obj[el]) obj[el] += '*';
      else obj[el] = '*';
    }
    let res = Object.entries(obj)
    let arr = [];
    for (let i = 0; i<res.length; i++){
      let x = res[i][0]+':'+res[i][1];
      arr.push(x)
    }
    return arr.toString();
  }

  // best solution

  