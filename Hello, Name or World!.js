function hello(name) {
    if (name === undefined){return  'Hello, World!'}
    let cap = name.toUpperCase()
    let low = name.toLowerCase()
    let lowName = '';
    for(let i = 1; i<low.length; i++){
      lowName += low[i];
    }
    return name === ''? 'Hello, World!': 'Hello, ' + cap[0] + lowName + '!';
  }