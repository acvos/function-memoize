var memoize = require('./index');

function multiply(number, multiplier) {
    console.log('performing calculation!');

    return number * multiplier;
}

console.log('->> Testing raw');

// The original function is called both times, so you'll see 4 identical log messages
var a = multiply(100, 3) + multiply(100, 3);
var b = multiply(100, 3) + multiply(100, 3);

// The results are identical
console.log(a, b)

console.log('->> Testing memoized');

var multiply = memoize(multiply);

// The original function is only called once, for other calls memoized result is used,
// so you'll only see the log message onece
var a = multiply(100, 3) + multiply(100, 3);
var b = multiply(100, 3) + multiply(100, 3);

// The results are identical
console.log(a, b)