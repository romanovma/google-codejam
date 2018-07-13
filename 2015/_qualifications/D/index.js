// node index.js < D-small-practice.in > D-small-practice.out
// node index.js < D-large-practice.in > D-large-practice.out

// time: O(1)
// space: O(1)
function main() {
  var testCases = nextInt();
  var X, R, C, MINS, MAXS, res;
  var GABRIEL = "GABRIEL";
  var RICHARD = "RICHARD";

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    X = nextInt();
    R = nextInt();
    C = nextInt();
    res = GABRIEL;

    MINS = Math.min(R, C);
    MAXS = Math.max(R, C);

    if (
      (MINS * MAXS) % X !== 0 ||
      (X === 3 && MINS === 1) ||
      (X === 4 && MINS <= 2) ||
      (X === 5 && (MINS <= 2 || MINS === 3 && MAXS === 5)) ||
      (X === 6 && MINS <= 3) ||
      (X >= 7)) {
      res = RICHARD;
    }

    print("Case #" + testCase + ": " + res);
  }

  function calc(s, l, x) {

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