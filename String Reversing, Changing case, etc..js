/*
Given 2 string parameters, show a concatenation of:

-the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
-a separator in between both strings: @@@
-the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
*/

function reverseAndMirror(s1,s2) {
    s1 = [...s1].map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')
    s2 = [...s2].map(x => x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).reverse().join('')
    return `${s2}@@@${[...s1].reverse().join('')}${s1}`
  }