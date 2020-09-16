/*
Complete the function to create backronyms. Transform the given string (without spaces)
 to a backronym, using the preloaded dictionary and return a string of words, separated 
 with a single space (but no trailing spaces).

The keys of the preloaded dictionary are uppercase letters A-Z and the values are 
predetermined words, for example:

dict["P"] == "perfect"
Examples
"dgm" ==> "disturbing gregarious mustache"

"lkj" ==> "literal klingon joke"
*/

var dict = {
    'A': "awesome",
    'B': 'beautiful',
    'C': 'confident',
    'D': 'disturbing',
    'E': 'eager',
    'F': 'fantastic',
    'G': 'gregarious',
    'H': 'hippy',
    'I': 'ingestable',
    'J': 'joke',
    'K': 'klingon',
    'L': 'literal',
    'M': 'mustache',
    'N': 'newtonian',
    'O': 'oscillating',
    'P': 'perfect',
    'Q': 'queen',
    'R': 'rant',
    'S': 'stylish',
    'T': 'turn',
    'U': 'underlying',
    'V': 'volcano',
    'W': 'weird',
    'X': 'xylophone',
    'Y': 'yogic',
    'Z': 'zero'
    };
    
    var makeBackronym = function(string){
      let str = '';
      for(let i = 0; i<string.length; i++){
        let char = string[i].toUpperCase()
        str += dict[char] + ' ';
      }
      return str.slice(0, -1);
    };

    //OR

    var makeBackronym = function(string){
        return string.toUpperCase()
              .split('')
              .map(el => dict[el])
              .join(' ');
      };