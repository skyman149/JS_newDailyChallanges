var Calculator = {
    average: function(...args) {
     let sum = args.reduce((ac, cur) => ac + cur, 0);
     let len = args.length;
     return args.length === 0 ? 0 : sum / len;
    }
   };