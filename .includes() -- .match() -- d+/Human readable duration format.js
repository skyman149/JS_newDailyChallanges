/*

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
  