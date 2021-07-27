function bubbleSort(arr) {
  
    while(true) {
      for(let i = 1; i<arr.length; i++) {
        if(arr[i-1]>arr[i]){
          let temp = arr[i-1];
          arr[i-1]=arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  }
  
  console.log(bubbleSort([0,3,4,1,2,0,10,5,0,10,10,100]));