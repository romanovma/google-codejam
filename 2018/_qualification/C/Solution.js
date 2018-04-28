var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var testCases;
var step = "a";
var a;
var b;
var n;
var last;

rl.on("line", function(line) {
  if (testCases === undefined) {
    testCases = parseInt(line);
    return;
  }

  if (step === "a") {
    a = parseInt(line);
    makeStep(a);
    step = "in";
    return;
  }

  if (step === "in") {
    var ans = line;
    switch (ans) {
      case "0 0":
        step = "a";
        testCases--;
        if (testCases === 0) {
          process.exit();
        }
        break;
      case "-1 -1":
        process.exit();
        break;
      default:
        makeStep(a);
        break;
    }
  }
});

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeStep(a) {
  if (a === 20) {
    console.log(randomIntFromInterval(2, 3), randomIntFromInterval(2, 4));
  } else {
    console.log(randomIntFromInterval(2, 19), randomIntFromInterval(2, 9));
  }
}
