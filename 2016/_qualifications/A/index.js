// node index.js < A-small.in > A-small.out

function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    var n = nextInt();
    var digits = [];
    var res = "INSOMNIA";

    if (n !== 0) {
      for (let i = 0; i < 10; i++) {
        digits[i] = false;
      }

      var counter = 0;

      while (digits.indexOf(false) > -1) {
        counter++;
        var num = counter * n;
        var numStr = num.toString();

        for (let i = 0; i < numStr.length; i++) {
          digits[parseInt(numStr[i])] = true;
        }
      }

      res = counter * n;
    }

    print("Case #" + testCase + ": " + res);
  }
}

// auxiliary code
var curTokens = [],
  curToken = 0;

function next() {
  while (curToken >= curTokens.length) {
    curTokens = readline().split(/[\s]+/);
    curToken = 0;
  }
  return curTokens[curToken++];
}

function nextInt() {
  return parseInt(next());
}

// code for nodejs
var inputBuffer = "",
  curLine = 0;

function readline() {
  return inputBuffer[curLine++];
}

function print(data) {
  process.stdout.write(data + "\n");
}

process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", function(chunk) {
  inputBuffer += chunk;
});

process.stdin.on("end", function() {
  inputBuffer = inputBuffer.split(/[\s]+/);
  main();
});
