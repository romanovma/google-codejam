// node Solution.js < B-small-practice.in > B-small.out
// node Solution.js < B-large-practice.in > B-large.out

// O(N * N * P)
function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    var N = nextInt();
    var P = nextInt();
    var R = [];
    var res = 0;

    for (let i = 0; i < N; i++) {
      R.push(nextInt());
    }

    var Q = [];
    var tmp;
    for (let i = 0; i < N; i++) {
      tmp = [];
      for (let j = 0; j < P; j++) {
        tmp.push(nextInt());
      }
      Q.push(
        tmp
        .sort((a, b) => a - b)
        .map(function (val) {
          return getMinMax(val, R[i]);
        })
        .filter(function (val) {
          return val[0] !== 0 && val[1] !== 0;
        })
      );
    }

    var min;
    var max;
    var iter = true;
    for (let i = 0; i < N; i++) {
      if (Q[i].length === 0) {
        iter = false;
      }
    }

    while (iter) {
      // check if we can make the set
      min = Q[0][0][0];
      max = Q[0][0][1];
      for (let i = 0; i < N; i++) {
        min = min >= Q[i][0][0] ? min : Q[i][0][0];
        max = max <= Q[i][0][1] ? max : Q[i][0][1];
      }
      if (min <= max) {
        // created 1 set
        res++;
        for (let i = 0; i < N; i++) {
          Q[i].shift();
          if (Q[i].length === 0) {
            iter = false;
          }
        }
      } else {
        // remove least useful element
        min = Q[0][0][0];
        leastUsefulIndex = 0;
        for (let i = 0; i < N; i++) {
          if (Q[i][0][0] < min) {
            leastUsefulIndex = i;
          }
        }

        Q[leastUsefulIndex].shift();
        if (Q[leastUsefulIndex].length === 0) {
          iter = false;
        }
      }
    }

    print("Case #" + testCase + ": " + res);
  }
}

function getMinMax(total, serving) {
  var min = Math.ceil(total * 10 / (11 * serving));
  var max = Math.floor(total * 10 / (9 * serving));
  return min > max ? [0, 0] : [min, max];
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