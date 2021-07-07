/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    
    if (s.length === 0 || s === ' ') return 0;
    let trimmed = s.trim();
    let arr = trimmed.split(' ');
    
    return arr[arr.length-1].length;
    
};


//

function len(s) {
    
    if (s.length === 0 || s === ' ') return 0;
    let trimmed = s.trim();
    let arr = trimmed.split(' ');
    
    return arr[arr.length-1].length;
    
};
console.log(len("I am AAAAAA"));
console.log(len(" a "));
console.log(len("a "));
console.log(len(""));
console.log(len(" "));
console.log(len("    "));