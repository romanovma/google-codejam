// node index.js < C-small-practice.in > C-small-ptactice.out
// node index.js < C-large-practice.in > C-large-ptactice.out

// time: O(B)
// space: O(B)
function main() {
  var testCases = nextInt();
  var A, B, len, map, res, div, cand, init;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    A = nextInt();
    B = nextInt();
    len = (A + "").length;
    res = 0;
    map = {};
    init = A;

    while (init < B) {
      for (var i = 1; i < len; i++) {
        div = Math.pow(10, i);

        cand = parseInt("" + init % div + parseInt(init / div));

        if (A <= cand && cand <= B && cand !== init && !map[cand + "|" + init] && !map[init + "|" + cand]) {
          res++;
          map[cand + "|" + init] = true;
          map[init + "|" + cand] = true;
        }
      }
      init++;
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