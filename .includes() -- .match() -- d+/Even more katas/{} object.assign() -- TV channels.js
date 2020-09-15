/*
Program channels into your TV's memory. An array with channels (strings) will be 
passed as an argument to the function redarr(). Sort the channels in an alphabetical
 order, remove duplicates and, finally, return an object where each channel 
 (object's value) is assigned to a whole number (objects's key), starting with 0.

Examples:

var arr = ["BBC1", "BBC2", "MTV"];
redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

var arr = ["BBC1", "BBC1", "BBC2", "MTV"];
redarr(arr) // returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
*/
// my code:
function redarr(arr) {
    let sorted = arr.sort() //sorts arr in alphabetical order
    let sortedUnique = sorted.filter((item, index) => sorted.indexOf(item) === index); //removes duplicates
    let obj = Object.assign({}, sortedUnique) //assign every value of provided array to the object with specific key
    return obj;
  }

// OR SHORTER:

function redarr(arr) {
    let sortedUnique = arr.sort().filter((item, index) => arr.indexOf(item) === index);
    let obj = Object.assign({}, sortedUnique)
    return obj;
  }