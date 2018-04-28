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

  values = line
    .split(" ")
    .map(function(val, i) {
      return {
        party: String.fromCharCode(i + 65),
        count: parseInt(val)
      };
    })
    .sort(function(a, b) {
      return b.count - a.count;
    });

  values = values.map(function(val, i) {
    if (i !== values.length - 1) {
      return {
        party: val.party,
        count: val.count - values[i + 1].count
      };
    } else {
      return {
        party: val.party,
        count: val.count
      };
    }
  });

  var res = "";
  var templ = values[0].party;

  for (var i = 0; i < values.length; i++) {
    if (i) {
      templ += " " + values[i].party;
    }

    for (var j = 0; j < values[i].count; j++) {
      res += " " + templ;
    }
  }

  res = res.slice(0, -2) + res.slice(-1);

  console.log("Case #" + testCase + ": " + res);
  testCase++;
  if (testCase > testCases) {
    process.exit();
  }
  step = "number";
});
