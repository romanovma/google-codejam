// node index.js < C-small-practice.in > C-small-ptactice.out
// node index.js < C-large-practice.in > C-large-ptactice.out

// time: O(N)
// space: O(N)
function main() {
  var testCases = nextInt();
  var N, nums;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    N = nextInt();
    nums = [];
    for (var i = 0; i < N; i++) {
      nums.push(nextInt());
    }

    print('Case #' + testCase + ': ' + calc(nums));
  }
}

function calc(nums) {
  if (nums.reduce((prev, cur) => prev ^ cur, 0)) {
    return "NO"
  }

  return nums.reduce((prev, cur) => prev + cur, 0) - Math.min(...nums);
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
var inputBuffer = '',
  curLine = 0;

function readline() {
  return inputBuffer[curLine++];
}

function print(data) {
  process.stdout.write(data + '\n');
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  inputBuffer += chunk;
});

process.stdin.on('end', function () {
  inputBuffer = inputBuffer.split(/[\s]+/);
  main();
});