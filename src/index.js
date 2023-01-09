module.exports = function reverse (n) {
    const array = Array.from(String(n));
    let str = String(array.reverse());
    str = str.split(',').join('');
    return str.replace(/[^0-9]/g, '');
}
