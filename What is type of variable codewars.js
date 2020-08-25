function type(value) {
    if ({}.toString.call(value)==="[object Array]"){return 'array'}
    if ({}.toString.call(value)==="[object Object]"){return 'object'}
    if ({}.toString.call(value)==="[object String]"){return 'string'}
    if ({}.toString.call(value)==="[object Date]"){return 'date'};
    if ({}.toString.call(value)==="[object Number]"){return 'number'};
    if ({}.toString.call(value)==="[object Undefined]"){return 'undefined'};
    if (value === null) {return 'null'}
  }