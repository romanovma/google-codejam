// node index.js < D-small-practice.in > D-small-ptactice.out
// node index.js < D-large-practice.in > D-large-ptactice.out

// time: O(NlogN)
// space: O(N)
function main() {
  var testCases = nextInt();
  var N, nums, numsOrig, res;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    N = nextInt();
    nums = [];
    for (var i = 0; i < N; i++) {
      nums.push(nextInt());
    }

    numsOrig = [...nums];
    nums.sort((a, b) => a - b);

    res = 0;
    for (var i = 0; i < N; i++) {
      if (numsOrig[i] !== nums[i]) {
        res++;
      }
    }

    print('Case #' + testCase + ': ' + res);
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