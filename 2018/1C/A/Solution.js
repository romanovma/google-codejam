var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var testCases;
var testCase = 1;
var step = "number";
var N;
var L;
var words;
var res;
var counter;

rl.on("line", function(line) {
  if (testCases === undefined) {
    testCases = parseInt(line);
    return;
  }

  if (step === "number") {
    values = line.split(" ");
    N = parseInt(values[0]);
    counter = N;
    L = parseInt(values[1]);
    step = "main";
    words = [];
    for (var i = 0; i < L; i++) {
      words.push([]);
    }
    return;
  }

  if (step === "main") {
    for (var i = 0; i < L; i++) {
      words[i].push(line[i]);
    }
    counter--;
    if (counter > 0) {
      return;
    } else {
      if (L === 1) {
        res = "-";
      } else {
        //   var unis = words.map(function(val) {
        //     var tmp = [];
        //     val.map(function(letter) {
        //       if (tmp[charCodeToNum(letter)]) {
        //         tmp[charCodeToNum(letter)]++;
        //       } else {
        //         tmp[charCodeToNum(letter)] = 1;
        //       }
        //     });
        //     return tmp;
        //   });
        //   var uniNumns = unis.map(function(arr) {
        //     return arr.filter(function(val) {
        //       return val;
        //     }).length;
        //   });
        //   var uniNumsReq = [];
        //   uniNumsReq[L - 1] = uniNumns[L - 1];
        //   uniNumsReq[L - 2] = uniNumns[L - 1];
        //   for (var i = L - 3; i >= 0; i--) {
        //     uniNumsReq[i] = uniNumns[i + 1] * uniNumsReq[i + 1];
        //   }
        //   // console.log(uniNumns);
        //   // console.log(uniNumsReq);
        //   // console.log(uniNumsReq[0] * uniNumns[0]);
        //   // console.log(N);
        //   if (uniNumsReq[0] * uniNumns[0] === N) {
        //     res = "-";
        //   } else {
        //     res = "";
        //     unis.map(function(arr) {
        //       for (var i=0; i<arr.length; i++) {
        //         if i
        //       }
        //       arr.map(function(letter) {
        //         if ()
        //       })
        //     })
        //     res = uniNumsReq;
        //   }
      }
    }
  }

  console.log("Case #" + testCase + ": " + res);

  testCase++;
  if (testCase > testCases) {
    process.exit();
  }
  step = "number";
});

function charCodeToNum(ch) {
  return ch.charCodeAt(0) - 65;
}
