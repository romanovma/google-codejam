var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var testCases;
var testCase = 1;

rl.on("line", function(line) {
  if (testCases === undefined) {
    testCases = parseInt(line);
    return;
  }

  values = line.split(" ");
  var d = parseInt(values[0]);
  var cs = values[1];

  var power = 0;
  var hash = [0];
  var total = 0;
  var count = 0;
  cs.split("").map(function(val, i) {
    if (val === "S") {
      hash[power]++;
      total = total + Math.pow(2, power);
      count++;
    }
    if (val === "C") {
      power++;
      hash[power] = 0;
    }
  });

  if (count > d) {
    console.log("Case #" + testCase + ": " + "IMPOSSIBLE");
  } else if (total <= d) {
    console.log("Case #" + testCase + ": " + "0");
  } else {
    var res = 0;
    var len = hash.length - 1;
    var pow = Math.pow(2, len);

    for (var i = len; i >= 0; i--) {
      var curStep = hash[i] * pow / 2;
      if (total - curStep <= d) {
        res = res + Math.ceil((total - d) / (pow / 2));
        break;
      } else {
        pow = pow / 2;
        total = total - curStep;
        hash[i - 1] += hash[i];
        res += hash[i];
      }
    }

    console.log("Case #" + testCase + ": " + res);
  }

  testCase++;
  if (testCase > testCases) {
    process.exit();
  }
});
