 var strStr = function(haystack, needle) {
    
    if (needle === "") return 0;
    
    let index = haystack.indexOf(needle); // -1 if needle not found (that's how indexOf() works)
    
    return index;
};