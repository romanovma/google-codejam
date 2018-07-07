// node index.js < A-small.in > A-small.out

// time: O(1)
// space: O

function main() {
  var testCases = nextInt();
  var n, digits, res, counter, num, numStr;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    n = nextInt();
    digits = [];
    res = "INSOMNIA";

    if (n !== 0) {
      for (var i = 0; i < 10; i++) {
        digits[i] = false;
      }

      counter = 0;

      while (digits.indexOf(false) > -1) {
        counter++;
        num = counter * n;
        numStr = num.toString();

        for (var i = 0; i < numStr.length; i++) {
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

process.stdin.on("data", function (chunk) {
  inputBuffer += chunk;
});

process.stdin.on("end", function () {
  inputBuffer = inputBuffer.split(/[\s]+/);
  main();
});