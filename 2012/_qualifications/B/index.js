// node index.js < B-small-practice.in > B-small-ptactice.out
// node index.js < B-large-practice.in > B-large-ptactice.out

// time: O(N)
// space: O(1)
function main() {
  var testCases = nextInt();
  var N, S, p, T, res;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    N = nextInt();
    S = nextInt();
    p = nextInt();
    res = 0;
    for (var i = 0; i < N; i++) {
      T = nextInt();
      if (T >= 3 * p - 2 && T >= p) {
        res++;
      } else if (T >= 3 * p - 4 && T >= p && S) {
        res++;
        S--;
      }
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