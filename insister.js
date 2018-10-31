// i: insister (which is this function)
// f: condition (if returns false, function repeats itself)
// c: callback (runs if condtion is true)
module.exports = (i, f, c) => (f() ? i(i, f, c) : c())
