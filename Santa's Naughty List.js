/*
Christmas is coming, and Santa has a long list to go through, to find who 
deserves presents for the big day. Go through a list of children, and return
 a list containing every child who appeared on Santa's list. Do not add any 
 child more than once. Output should be sorted.

Comparison should be case sensitive and the returned list should contain 
only one copy of each name: "Sam" and "sam" are different, but "sAm" and 
"sAm" are not.
*/

function findChildren(santasList, children) {
    let arr = [];
    for (let el of children){
      for (let name of santasList){
        if (el === name) arr.push(name);
          } 
       }
    let arr1 = arr.filter((el, i) => i === arr.indexOf(el));
    return arr1.sort();
  }