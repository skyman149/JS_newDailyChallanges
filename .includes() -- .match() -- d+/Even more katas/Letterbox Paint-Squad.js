var paintLetterboxes = function(start, end) {
  
    let endV = end;
    let numStr = "";
    let result = {'0': 0,
                  '1': 0,
                  '2': 0,
                  '3': 0,
                  '4': 0,
                  '5': 0,
                  '6': 0,
                  '7': 0,
                  '8': 0,
                  '9': 0 
                 };
    
    while (endV >= start){
      numStr += endV;
      endV--;
    }
    
    for (let i = 0; i < numStr.length; i++) {
    if (result[numStr[i]]) {
        result[numStr[i]] += 1;
    } else {
        result[numStr[i]] = 1;
      }
    }
    
    return Object.values(result);
    
  }
  