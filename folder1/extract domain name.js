function domainName(url){
    let str = url.replace('http://','').replace('https://','').replace('www.','').split(/[//]/)[0];
        let res = str.split(".")[0];
        return res;
  }
  //--
  //--