// node index.js < B-small-practice.in > B-small-practice.out
// node index.js < B-large-practice.in > B-large-practice.out

// time: O(1)
// space: O(1)
function main() {
  var testCases = nextInt();
  var C, F, X, n, res;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    C = +next();
    F = +next();
    X = +next();

    n = Math.max(0, Math.floor(X / C - 2 / F));

    res = X / (2 + n * F);

    for (var i = 0; i < n; i++) {
      res += C / (2 + i * F);
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