// hard code solution

function printerError(s) {
    
    let count1 = 0;
    let count2 = s.length;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "n" ||
         s[i] === "o" ||
         s[i] === "p" ||
         s[i] === "q" ||
         s[i] === "r" ||
         s[i] === "s" ||
         s[i] === "t" ||
         s[i] === "u" ||
         s[i] === "v" ||
         s[i] === "w" ||
         s[i] === "x" ||
         s[i] === "y" ||
         s[i] === "z") count1++;
    }
     
      let res = `${count1}/${count2}`;
  
      return res;
      
}

// OR

var printerError = (s) => (s.match(/[n-z]/g) || []).length + '/' + s.length