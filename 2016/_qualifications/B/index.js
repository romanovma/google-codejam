// node index.js < A-small.in > A-small.out

// time: O(s)
// space: O(s)
function main() {
  var testCases = nextInt();
  var pcs, count, last;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    pcs = next().split("");

    count = 0;
    last = "+";

    pcs
      .slice(0, pcs.lastIndexOf("-") + 1)
      .reverse()
      .map(pc => {
        if (pc !== last) {
          count++;
          last = pc;
        }
      });

    print("Case #" + testCase + ": " + count);
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