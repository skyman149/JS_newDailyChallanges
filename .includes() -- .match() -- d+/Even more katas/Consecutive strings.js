function longestConsec(strarr, k) {

    if (strarr.length === 0 || k > strarr.length || k <= 0) return '';
  
    let str = '';
  
    for (let i = 0; i < strarr.length; i++) {
        let currentStr = strarr.slice(i, k + i).join('');
        if (currentStr.length > str.length) {
            str = currentStr;
        }
    }
    return str;
}