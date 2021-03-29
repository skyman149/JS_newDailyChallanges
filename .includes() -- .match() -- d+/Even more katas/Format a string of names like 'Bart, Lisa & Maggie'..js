// function list(names){
//   if (names.length === 0) return '';
//   if (names.length === 1) return Object.values(...names).toString();
//   if (names.length === 2) {
//     let r = '';
//   for (let i = 0; i < names.length; i++) {
//     r += Object.values(names[i]) + ' & ';
//     }
//     return r.slice(0, -3)
//   }
//   if (names.length > 2){
//   let res = '';
//   for (let i = 0; i < names.length; i++) {
//     res += Object.values(names[i]) + ', ';
//   }
  
//   let position = [];
//   let trimed = res.trim();
//   let arrRes = trimed.split('')
  
//   for (let i = 0; i < arrRes.length; i++) {
//     if (arrRes[i] === 'a') {
//       position.push(i);
//     }
//   }
  
//   let index = Math.max(...position);
//   let slice1 = trimed.slice(0, index-3)
//   let slice2 = trimed.slice(index-1, trimed.length)
//   let finalRes = slice1 + ' & ' + slice2
//   return finalRes.slice(0, -1);
// }
//   }

function list(names){
    let str = '';
    if (names.length !== 0) {
      let last = names.pop();
      str = names.map( (val, i, arr) => {
        if (i !== arr[arr.length - 1]) {
          return val.name;
        }
      }).join(', ')
       
      str += str !== '' ? ' & ' + last.name : last.name;
    }
     
    return str;
  }