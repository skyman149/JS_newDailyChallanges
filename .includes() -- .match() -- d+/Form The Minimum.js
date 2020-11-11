// from given array form minimal number posible

function minValue(values){
    return +values.filter((el, i) => i === values.indexOf(el))
                  .sort((a,b) => a-b)
                  .join('');
  }