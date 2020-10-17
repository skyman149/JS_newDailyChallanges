/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

function formatDuration (seconds) {
  
    if (seconds === 0){
      return "now"
    } 
    
    let countY = 0,
        countD = 0,
        countH = 0,
        countM = 0;
  
    let y = " year", 
        d = " day",
        h = " hour",
        m = " minute",
        s = " second",
        result = "";
    
    let unit = [],
        value = [];
    
    while (seconds >= 60){
      countM++;
      seconds -= 60;
    }
    while (countM >= 60){
      countH++;
      countM -= 60;
    }
    while (countH >= 24){
      countD++;
      countH -= 24;
    }
    while (countD >= 365){
      countY++;
      countD -= 365;
    }
    if(countY >0){
      if(countY > 1){
        y += "s";
      }
      unit.push(y);
      value.push(countY);
    }
   
    if(countD > 0){
      if (countD > 1){
        d += "s";
      }
      unit.push(d);
      value.push(countD);
    }
  
    if(countH > 0){
      if (countH > 1){
        h += "s";
        }
      unit.push(h);
      value.push(countH);
    }
      
    if(countM > 0){
      if (countM > 1){
        m += "s";
      }
      unit.push(m);
      value.push(countM);
    }
    if(seconds > 0){
      if (seconds > 1){
        s += "s";
      }
      unit.push(s);
      value.push(seconds);
    }
    
    let i = unit.length-1;
    
    while(i >= 0){
      result = (value[i]).toString() + unit[i] + result;
      if (i === unit.length-1 && unit.length > 1){
        result = ' and ' + result;
      }
      else if (i <= unit.length-2 && i > 0){
        result = ", " + result; 
      }
      i--;
    }
    
    return result;
    
    }
  