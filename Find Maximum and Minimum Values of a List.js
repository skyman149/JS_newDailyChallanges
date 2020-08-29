var min = function(list){
    let mi = list[0]
    for(let i = 0; i<list.length; i++){
      if(list[i]<mi){mi=list[i]}
    }
    return mi;
}

var max = function(list){
   let ma = list[0]
   for(let i = 0; i<list.length; i++){
      if(list[i]>ma){ma=list[i]}
    }
    return ma;
}