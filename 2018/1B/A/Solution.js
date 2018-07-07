var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var testCases;
var testCase = 1;
var step = "number";

rl.on("line", function(line) {
  if (testCases === undefined) {
    testCases = parseInt(line);
    return;
  }

  if (step === "number") {
    values = line.split(" ");
    var N = parseInt(values[0]);
    var L = values[1];
    step = "main";
    return;
  }

  values = line.split(" ");

  var tmp = [];
  var count = 0;
  var atLeastOne = false;
  for (var i = N; i >= 1; i--) {
    if (Math.round(100 * i / N) !== 100 * i / N) {
      tmp[i] = 0;
    } else if (!atLeastOne) {
      tmp[i] = -1;
    } else {
      tmp[i] = ++count;
    }
  }
  if (!tmp.length) {
    console.log("Case #" + testCase + ": " + 100);
  } else {
    values
      .map(function(val) {
        return tmp[val];
      })
      .filter(function(val) {
        return val !== -1;
      })
      .sort(function(a, b) {
        return a - b;
      });

    var res = 0;
    var avail = N - L;
    while (avail > 0) {
      avail = avail - values.shift();
      if (avail >= 0) {
        res++;
      }
    }
  }

  testCase++;
  if (testCase > testCases) {
    process.exit();
  }
  step = "number";
});
