// i: insister (which is this function)
// c: condition (if returns false, function repeats itself)
// cb: callback (runs if condtion is true)
module.exports = (i, c, cb) => (c() ? i(i, c, cb) : cb())
