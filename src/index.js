module.exports = function reverse (n) {
    if (n<0){
        let nString = String(n).slice(1);
        let nReverse = nString.split('').reverse().join('');
        let nNumber = Number(nReverse);
        return nNumber
    } else {
    let nString = String(n);
    let nReverse = nString.split('').reverse().join('');
    let nNumber = Number(nReverse)
    return nNumber
    }
}