// node index.js < A-small.in > A-small.out

// time: O(S)
// space: O(S)
function main() {
  var testCases = nextInt();
  var smax, ppl, cur, res;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    smax = nextInt();
    ppl = next()
      .split("")
      .map(el => parseInt(el));
    cur = ppl[0];
    res = 0;

    for (var i = 1; i < ppl.length; i++) {
      if (cur < i) {
        res += i - cur;
        cur += i - cur;
      }
      cur += ppl[i];
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