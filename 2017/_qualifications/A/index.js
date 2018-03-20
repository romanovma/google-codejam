// node index.js < A-small.in > A-small.out

// O(n)
function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    var cmd = next();
    var k = nextInt();
    var flips = 0;
    var memo = [];
    var res = 0;

    // greedy algorithm
    pancakes = cmd.split("");

    for (let i = 0; i < pancakes.length; i++) {
      if (memo[i]) {
        flips--;
      }

      if (shallFlip(pancakes[i], flips)) {
        if (i < pancakes.length - k + 1) {
          // flip
          res++;
          flips++;
          // memo for decreasing num of flips
          memo[i + k] = true;
        } else {
          res = "IMPOSSIBLE";
          break;
        }
      }
    }

    print("Case #" + testCase + ": " + res);
  }
}

function shallFlip(side, flipsNum) {
  return (
    (side === "+" && flipsNum % 2 === 1) || (side === "-" && flipsNum % 2 === 0)
  );
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
