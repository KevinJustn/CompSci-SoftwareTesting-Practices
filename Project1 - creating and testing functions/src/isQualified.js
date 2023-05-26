const isQualified = (a) => { 
    var q;
    if (a >= 70){ q = "qualified"; }
    else { q = "not qualified"}
    return q;
}
module.exports = { isQualified };
console.log(isQualified(71));