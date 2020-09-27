/*
average of array elements(int) -> round to low int
*/

function getAverage(marks){
    return Math.floor(marks.reduce((ac, cr)=> ac+cr)/marks.length);
  }