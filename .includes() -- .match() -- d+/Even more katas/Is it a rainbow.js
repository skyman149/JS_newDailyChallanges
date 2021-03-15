function sortRainbow(colour){
    return ['red','orange','yellow','green','blue','indigo','violet'].every((el, i) => colour[i] === el);
  }