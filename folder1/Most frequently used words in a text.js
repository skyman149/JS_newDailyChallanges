
function topThreeWords(text) {
    text = text.split(' ').map(el => el.toLowerCase()).map(el => el.replace(/[.,\/#!$%\^&\*;:{}=\-_~(),]/g,'')).filter(el => el !== '').filter(el => el !== `'`);
    let obj = {};
    text.forEach(el => el in obj ? obj[el]++ : obj[el] = 1);
    let arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    return text.length === 0 ? [] : arr.length === 1 ? [arr[0][0]] : arr.length === 2 ? [arr[0][0], arr[1][0]] : [arr[0][0], arr[1][0], arr[2][0]]
}