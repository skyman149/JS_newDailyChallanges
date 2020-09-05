/*
Some really funny web dev gave you an array of numbers from his API response
 as an array of strings!

You need to cast the whole array to the correct type.
*/

function toNumberArray(stringarray){
    return stringarray.map(el => parseFloat(el))
  }