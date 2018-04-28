var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var testCases;
var testCase = 1;
var step = "number";
var n;

rl.on("line", function(line) {
  if (testCases === undefined) {
    testCases = parseInt(line);
    return;
  }

  if (step === "number") {
    n = parseInt(line);
    step = "main";
    return;
  }

  values = line.split(" ").map(function(val) {
    return parseInt(val);
  });

  var odd = values
    .filter(function(val, i) {
      return i % 2 === 0;
    })
    .sort(function(a, b) {
      return a - b;
    });

  var even = values
    .filter(function(val, i) {
      return i % 2 === 1;
    })
    .sort(function(a, b) {
      return a - b;
    });

  var merged = [];
  for (var i = 0; i < even.length; i++) {
    merged.push(odd[i]);
    merged.push(even[i]);
  }
  if (odd.length > even.length) {
    merged.push(odd.slice(-1));
  }

  var res = "OK";
  for (var i = 0; i < merged.length - 1; i++) {
    if (merged[i] > merged[i + 1]) {
      res = i;
      break;
    }
  }

  console.log("Case #" + testCase + ": " + res);

  testCase++;
  if (testCase > testCases) {
    process.exit();
  }
  step = "number";
});
