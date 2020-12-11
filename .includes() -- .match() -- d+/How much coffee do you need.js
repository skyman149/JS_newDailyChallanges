//

// HARDCODING :)

function howMuchCoffee(events) {
    let count = 0;
    for (let i = 0; i < events.length; i++){
      if(events[i] === 'cw') count++;
      if(events[i] === 'cat') count++;
      if(events[i] === 'dog') count++;
      if(events[i] === 'movie') count++;
      if(events[i] === 'CW') count += 2;
      if(events[i] === 'CAT') count += 2;
      if(events[i] === 'DOG') count += 2;
      if(events[i] === 'MOVIE') count += 2;
    }
    return count > 3? 'You need extra sleep' : count;
  }

// BY METHODS

function howMuchCoffee(events) {
    let arr = ["cw", "cat", "movie", "dog"];
    events = events.filter(el => arr.includes(el.toLowerCase()))
                                    .map(el => el === el.toLowerCase()? 1 : 2)
                                    .reduce((acc, el) => acc + el, 0);
    
    return events > 3? 'You need extra sleep' : events;
  }