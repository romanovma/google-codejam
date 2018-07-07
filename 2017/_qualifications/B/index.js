// node index.js < A-small.in > A-small.out

// time: O(n)
// space: O(n)
function main() {
  var testCases = nextInt();
  var n, found;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    n = next();
    found = false;

    n = n.split("").map(function (digit) {
      return +digit;
    });

    // handle digits after first invalid pair
    for (var i = 0; i < n.length; i++) {
      if (found) {
        n[i] = 9;
      } else if (i !== n.length - 1 && n[i] > n[i + 1]) {
        n[i]--;
        found = true;
        foundInd = i;
      }
    }

    // handle digits before first invalid pair
    for (var i = foundInd; i > 0; i--) {
      if (n[i] < n[i - 1]) {
        n[i] = 9;
        n[i - 1]--;
      }
    }

    print("Case #" + testCase + ": " + n.join("").replace(/^0+/, ""));
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