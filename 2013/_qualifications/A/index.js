// node index.js < A-small-practice.in > A-small-practice.out
// node index.js < A-large-practice.in > A-large-practice.out

// time: O(1)
// space: O(1)
function main() {
  var testCases = nextInt();
  var FIELD;;
  var N = 4;
  var O = "OOOO";
  var X = "XXXX";


  for (var testCase = 1; testCase <= testCases; ++testCase) {
    FIELD = [];
    for (var i = 0; i < N; i++) {
      FIELD.push(next().split(""));
    }

    print("Case #" + testCase + ": " + check(FIELD, N, O, X));

    // if (testCase !== testCases) {
    //   next();
    // }
  }
}

function check(FIELD, N, O, X) {
  var notFinished = false;
  for (var i = 0; i < N; i++) {
    // rows
    if (FIELD[i].map(ch => ch === 'T' ? 'O' : ch).join("") === O) {
      return "O Won"
    }
    if (FIELD[i].map(ch => ch === 'T' ? 'X' : ch).join("") === X) {
      return "X Won";
    }

    // columns
    var col = "";
    for (var j = 0; j < N; j++) {
      col += FIELD[j][i];
    }
    if (col.split("").map(ch => ch === 'T' ? 'O' : ch).join("") === O) {
      return "O Won";
    }
    if (col.split("").map(ch => ch === 'T' ? 'X' : ch).join("") === X) {
      return "X Won";
    }

    // diagonals
    var diag = "";
    for (var j = 0; j < N; j++) {
      diag += FIELD[j][j];
    }
    if (diag.split("").map(ch => ch === 'T' ? 'O' : ch).join("") === O) {
      return "O Won";
    }
    if (diag.split("").map(ch => ch === 'T' ? 'X' : ch).join("") === X) {
      return "X Won";
    }
    diag = "";
    for (var j = 0; j < N; j++) {
      diag += FIELD[j][N - 1 - j];
    }
    if (diag.split("").map(ch => ch === 'T' ? 'O' : ch).join("") === O) {
      return "O Won";
    }
    if (diag.split("").map(ch => ch === 'T' ? 'X' : ch).join("") === X) {
      return "X Won";
    }

    // check dots
    notFinished = notFinished || (FIELD[i].indexOf('.') > -1);
  }
  if (notFinished) {
    return "Game has not completed"
  } else {
    return "Draw";
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