// node index.js < A-small.in > A-small.out

// O(log(n))
// this doesn't work on large dataset: Number.MAX_SAFE_INTEGER === 9007199254740991
function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    var n = nextInt();
    var k = nextInt();

    var count = [];
    count[n] = 1;

    var set = new Set([n]);
    var i = 0;
    var x, x1, x2;

    while (i < k) {
      x = Math.max(...set);
      i = i + count[x];
      x1 = Math.floor((x - 1) / 2);
      x2 = Math.ceil((x - 1) / 2);
      set.add(x1);
      set.add(x2);
      set.delete(x);
      updateCount(count, x1, x);
      updateCount(count, x2, x);
    }

    print("Case #" + testCase + ": " + x2 + " " + x1);
  }
}

function updateCount(arr, i, x) {
  arr[i] = arr[i] === undefined ? arr[x] : arr[i] + arr[x];
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
