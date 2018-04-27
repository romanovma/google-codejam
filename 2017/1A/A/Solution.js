// node Solution.js < A-small-practice.in > A-small.out
// node Solution.js < A-large-practice.in > A-large.out

// O(R * C)
function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    var R = nextInt();
    var C = nextInt();
    var res = [];

    for (let i = 0; i < R; i++) {
      res.push(next().split(""));
    }

    step(0, res, R, C);

    print("Case #" + testCase + ":");
    for (let i = 0; i < R; i++) {
      print(res[i].join(""));
    }
  }
}

function step(startR, res, R, C) {
  if (startR >= R) {
    return;
  }

  var initR;
  var i = startR;

  while (initR === undefined && i < R) {
    for (let j = 0; j < C; j++) {
      if (res[i][j] !== "?") {
        initR = i;
        initC = j;
        break;
      }
    }
    if (initR === undefined) {
      i++;
    }
  }

  if (initR !== undefined) {
    for (let j = 0; j < initC; j++) {
      res[initR][j] = res[initR][initC];
    }

    for (let j = initC + 1; j < C; j++) {
      if (res[initR][j] === "?") {
        res[initR][j] = res[initR][j - 1];
      }
    }

    for (let i = startR; i < initR; i++) {
      for (let j = 0; j < C; j++) {
        res[i][j] = res[initR][j];
      }
    }
    step(initR + 1, res, R, C);
  } else {
    for (let i = startR; i < R; i++) {
      for (let j = 0; j < C; j++) {
        res[i][j] = res[startR - 1][j];
      }
    }
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
