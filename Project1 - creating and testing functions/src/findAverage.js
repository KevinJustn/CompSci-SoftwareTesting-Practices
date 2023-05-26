const findAverage = (a,b,c,d) => {
    a = Math.round(a);
    b = Math.round(b);
    c = Math.round(c);
    d = Math.round(d);
    var avg = (a + b + c + d)/4;
    return Math.round(avg);
}
module.exports = { findAverage };
console.log(findAverage(60.521, 90.4422, 56.443, 76.5411));