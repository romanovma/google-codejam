// node index.js < B-small-practice.in > B-small-practice.out
// node index.js < B-large-practice.in > B-large-practice.out


// time: O(1)
// space: O(1)
function main() {
  var testCases = nextInt();
  var N, M, field;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    N = nextInt();
    M = nextInt();
    field = [];

    for (var i = 0; i < N; i++) {
      field.push([]);
      for (var j = 0; j < M; j++) {
        field[i].push(nextInt());
      }
    }



    print("Case #" + testCase + ": " + check(field, N, M));
  }
}

function check(field, N, M) {
  var col;
  var fieldTransp = [];
  for (var i = 0; i < M; i++) {
    fieldTransp.push([]);
    for (var j = 0; j < N; j++) {
      fieldTransp[i].push(field[j][i]);
    }
  }
  for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
      // check that value is max in a row
      if ((field[i][j] < Math.max(...field[i])) && (field[i][j] < Math.max(...fieldTransp[j]))) {
        return "NO";
      }
    }
  }

  return "YES";
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