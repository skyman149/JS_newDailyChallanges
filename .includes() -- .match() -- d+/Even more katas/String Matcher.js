function isMatching(string, str1, str2) {
    let result = (str1 + str2).toLowerCase().split('').sort().join('').replace(/ /g, '');
    string = string.toLowerCase().split('').sort().join('').replace(/ /g, '');
    return result === string;
    }