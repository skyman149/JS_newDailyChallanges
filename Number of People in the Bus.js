var number = function(busStops){
    let pInBus = 0;
    for (let i=0; i<busStops.length; i++){
      pInBus += busStops[i][0] - busStops[i][1];
    }
    return pInBus;
  }