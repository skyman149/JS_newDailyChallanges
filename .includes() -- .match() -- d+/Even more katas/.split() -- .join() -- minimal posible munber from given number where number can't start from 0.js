function changeDigitsOrder(num){
    let arr = num.toString().split("").sort()
    if(arr[0] !== '0'){return +arr.join('');}
    
    let index = 0; 
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > "0"){
        index = i; 
        break;
      }
    }
    let temp = arr[0]
    arr[0] = arr[index]
    arr[index] = temp;
    
    return +arr.join('');
  }