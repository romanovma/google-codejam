// node index.js < A-small.in > A-small.out

// complexity is bad one :)
function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    var platesNum = nextInt();
    var plates = [];
    for (let i = 0; i < platesNum; i++) {
      plates.push(nextInt());
    }
    plates = plates.sort((a, b) => b - a);
    var max = plates[0];
    var res = max;

    for (let i = 1; i < max; i++) {
      var localRes = 0;
      plates.map(pcs => (localRes += Math.ceil(pcs / i) - 1));
      res = res <= localRes + i ? res : localRes + i;
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

process.stdin.on("data", function(chunk) {
  inputBuffer += chunk;
});

process.stdin.on("end", function() {
  inputBuffer = inputBuffer.split(/[\s]+/);
  main();
});
