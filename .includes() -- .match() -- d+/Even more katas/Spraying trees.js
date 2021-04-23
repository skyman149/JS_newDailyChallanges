function task(w, n, c) {
  
    let name;
    
    switch(w) {
    case 'Monday':
      name = 'James';
      break;
    case 'Tuesday':
      name = 'John';
      break;
    case 'Wednesday':
      name = 'Robert';
      break;
    case 'Thursday':
      name = 'Michael';
      break;
    case 'Friday':
      name = 'William';
      break;
    default: 'Wrong input'
    }
    
    return `It is ${w} today, ${name}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`;
  }

  // OR 

  let task = (w,n,c) => {
    let obj = {'Monday':'James','Tuesday':'John','Wednesday':'Robert','Thursday':'Michael','Friday':'William'};
    return `It is ${w} today, ${obj[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`;
  };
  