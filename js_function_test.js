
//https://www.sitepoint.com/measuring-javascript-functions-performance/

//comparing lodash with native javascript
var _ = require('lodash');
var now = require("performance-now")
var x= [22,73,14,34,23,62,70,87,91,35,33,83]
var numbers=[]
for (var i = 0; i < 10; i++) {
    var t0 = now();
    _.map(x,(i)=>i*10)
    // x.map((i)=>i*10)
    var t1 = now();
    numbers.push(t1 - t0);
}
function median(sequence) {
  sequence.sort();  // note that direction doesn't matter
  return sequence[Math.ceil(sequence.length / 2)];
}
console.log('Median time', median(numbers).toFixed(5), 'milliseconds');
