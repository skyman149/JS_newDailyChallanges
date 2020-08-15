function upsideDown(n){
    let str = '';
    for (let i = n; i>0; i--){
      str += '*'.repeat(i);
      if (i>1){
        str+='\n';
      }
    }
    return str;
  }
  console.log(upsideDown(5));

// "*****
// ****
// ***
// **
// *"