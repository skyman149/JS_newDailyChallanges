/*
Some people just have a first name; some people have first and last names and some 
people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

// My code:

function initializeNames(name){
    let arr = name.split(' ');
    let nArr = [];
    for(let i = 1; i<arr.length-1; i++){
      let t = arr[i].slice(0,1).toUpperCase()+".";
      nArr.push(t);
    }
    return nArr.length>0? `${arr[0]} ${nArr.join(' ')} ${arr[arr.length-1]}` : arr.join(' ')
  }

// OR

function initializeNames(name){
    let arr = name.split(' ');
     let initials = arr[0] + ' ';
   if (arr.length <= 2) return arr.join(' ');
     else for (let i = 1; i < arr.length - 1; i++) {
       initials += `${arr[i][0]}. `;
     } return initials += arr[arr.length - 1];
   }