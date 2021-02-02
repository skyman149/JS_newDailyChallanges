/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let rom = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };
      let res = 0;
      for(let i = 0; i < s.length; i++){
      if (rom[s[i]] < rom[s[i+1]]){
        res -= rom[s[i]];
      } else {
          res += rom[s[i]];
      }
    }
      return res;
  };

  // -
  // --
  // ---
  // ----