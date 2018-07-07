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
    var N = parseInt(line);
    step = "main";
    return;
  }

  weights = line
    .split(" ")
    .map(function(val) {
      return parseInt(val);
    })
    .reverse();

  var res = [];
  for (var i = 0; i < N; i++) {
    res.push([]);
  }

  for (var i = 0; i < N; i++) {
    res[0].push([i, weights[i]]);
  }
  var tmp;

  for (i = 1; i < N; i++) {
    for (var j = 0; j < N; j++) {
      tmp = [];
      tmp[0] = res[i - 1][j][0];
      tmp[1] = res[i - 1][j][1];
      for (var k = j + 1; k < N; k++) {
        if (
          res[i][k][1] <= weights[j] &&
          (res[i][k][0] > tmp[0] || res[i][k][1] < tmp[1])
        ) {
          tmp[0] = res[i][k][0];
          tmp[1] = res[i][k][1];
        }
      }
      res[i][j] = [];
      res[i][j][0] = tmp[0];
      res[i][j][1] = tmp[1];
    }
  }

  console.log("Case #" + testCase + ": " + res[N - 1][0][0] + 1);
  // console.log("Case #" + testCase + ": " + 44);

  testCase++;
  if (testCase > testCases) {
    process.exit();
  }
  step = "number";
});
