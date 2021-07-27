function numCheck(...args) {
  
    let result = args.filter(el => typeof el !== "number");
    
    return result.length === 0;
  }


  // OR

  function numbers() {
    return [...arguments].every(x => typeof x === "number");
  }