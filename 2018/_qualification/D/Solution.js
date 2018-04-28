var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var testCases;
var testCase = 1;
var a;

rl.on("line", function(line) {
  if (testCases === undefined) {
    testCases = parseInt(line);
    return;
  }

  a = +line;

  if (a <= 1.414213) {
    res = [
      "0.5 0 0",
      "0" +
        " " +
        (a / 4 - Math.sqrt(0.5 - a * a / 4) / 2) +
        " " +
        -(a / 4 + Math.sqrt(0.5 - a * a / 4) / 2),
      "0" +
        " " +
        (a / 4 + Math.sqrt(0.5 - a * a / 4) / 2) +
        " " +
        (a / 4 - Math.sqrt(0.5 - a * a / 4) / 2)
    ];
  } else {
    res = [
      "0" +
        " " +
        (a / 4 - Math.sqrt(0.75 - a * a / 4) / 2) +
        " " +
        -(a / 4 + Math.sqrt(0.75 - a * a / 4) / 2),
      Math.sqrt(2) / 2 +
        " " +
        (a / 4 - Math.sqrt(0.75 - a * a / 4) / 2) +
        " " +
        (a / 8 + Math.sqrt(0.75 - a * a / 4) / 4),
      -Math.sqrt(2) / 2 +
        " " +
        (a / 4 - Math.sqrt(0.75 - a * a / 4) / 2) +
        " " +
        (a / 8 + Math.sqrt(0.75 - a * a / 4) / 4)
    ];
  }

  console.log("Case #" + testCase + ":");
  console.log(res[0]);
  console.log(res[1]);
  console.log(res[2]);

  testCase++;
  if (testCase > testCases) {
    process.exit();
  }
});
