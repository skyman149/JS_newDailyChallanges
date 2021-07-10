// with indexOf() method

var strStr = function(haystack, needle) {
    
    if (needle === "") return 0;
    
    let index = haystack.indexOf(needle); // -1 if needle not found (that's how indexOf() works)
    
    return index;
};


// without indexOf() method

 var strStr = function(haystack, needle) {
    
    if (needle.length == 0) return 0;
    
    for (let i = 0; i < haystack.length; i++) {
        let k = i, j = 0;
        while (haystack[k] == needle[j] && j < needle.length) {
            k++, j++;
        }
        if (j == needle.length) return i;
    }
    return -1; // couldn't find needle in haystack
};