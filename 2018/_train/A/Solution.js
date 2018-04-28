var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var testCases;
var step = "ab";
var a;
var b;
var n;
var last;

rl.on("line", function(line) {
  if (testCases === undefined) {
    testCases = parseInt(line);
    return;
  }

  if (step === "ab") {
    line = line.split(" ");
    a = parseInt(line[0]) + 1;
    b = parseInt(line[1]);
    step = "n";
    return;
  }

  if (step === "n") {
    n = parseInt(line);
    last = Math.floor((a + b) / 2);
    console.log(last);
    step = "guess";
    return;
  }

  if (step === "guess") {
    var ans = line;
    switch (ans) {
      case "TOO_BIG":
        b = last - 1;
        last = Math.floor((a + b) / 2);
        console.log(last);
        break;
      case "TOO_SMALL":
        a = last + 1;
        last = Math.floor((a + b) / 2);
        console.log(last);
        break;
      case "CORRECT":
        step = "ab";
        testCases--;
        if (testCases === 0) {
          process.exit();
        }
        break;
      case "WRONG_ANSWER":
        process.exit();
        break;
      default:
        process.exit();
        break;
    }
  }
});
