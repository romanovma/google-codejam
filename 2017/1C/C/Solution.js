// node Solution.js < B-small-practice.in > B-small.out
// node Solution.js < B-large-practice.in > B-large.out

// O(NlogN)
function main() {
  var testCases = nextInt();
  var K, N, U, P;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    N = nextInt();
    K = nextInt();
    U = next() * 10000;
    p = [];
    for (let i = 0; i < N; i++) {
      p.push(next() * 10000)
    }

    // simple case
    if (K === N) {
      p.sort((a, b) => a - b);
      for (let i = 0; i < N - 1; i++) {
        if (p[i] < p[i + 1] && U > 0) {
          let needed = (p[i + 1] - p[i]) * (i + 1);
          if (needed <= U) {
            U = U - needed;
            for (let j = 0; j <= i; j++) {
              p[j] += p[i + 1] - p[i];
            }
          } else {
            U = 0;
            for (let j = 0; j <= i; j++) {
              p[j] += U / (i + 1);
            }
          }
        }
      }

      if (U > 0) {
        for (let i = 0; i < N; i++) {
          p[i] += U / N;
        }
      }
    }

    res = p.map(el => el / 10000).reduce((a, b) => a * b, 1).toFixed(6);

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