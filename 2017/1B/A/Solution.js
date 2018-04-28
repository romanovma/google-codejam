// node Solution.js < A-small-practice.in > A-small.out
// node Solution.js < A-large-practice.in > A-large.out

// O(N)
function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    var D = nextInt();
    var N = nextInt();
    var horses = [];

    for (let i = 0; i < N; i++) {
      horses.push([nextInt(), nextInt()]);
    }

    // find slowest horse
    var slowestH = horses
      .map(value => (D - value[0]) / value[1])
      .sort((a, b) => b - a)[0];

    print("Case #" + testCase + ": " + D / slowestH);
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
