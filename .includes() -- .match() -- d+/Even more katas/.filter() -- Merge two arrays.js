// LONG SOLUTION

function mergeArrays(a, b) {

    let result = [];
  
    if(a.length > b.length){
      for (let i = 0; i < a.length; i++) {
      result.push(a[i]);
      result.push(b[i]);
      }
    } else {
      for (let i = 0; i < b.length; i++) {
      result.push(a[i]);
      result.push(b[i]);
      }
    }
    
    return result.filter((value) => value !== undefined);
  }

// SHORT SOLUTION

  function mergeArrays(a, b) {

    let maxLength = Math.max(a.length, b.length);
    let result = [];
  
    for (let i = 0; i < maxLength; i++) {
        result.push(a[i]);
        result.push(b[i]);
        }
    
    return result.filter((value) => value !== undefined);
  }