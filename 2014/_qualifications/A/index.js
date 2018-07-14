// node index.js < A-small-practice.in > A-small-practice.out

// time: O(1)
// space: O(1)
function main() {
  var testCases = nextInt();
  var A1, ARR1, A2, ARR2, card, res, count;
  var MAG = "Bad magician!";
  var VOL = "Volunteer cheated!";

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    count = 0;
    A1 = nextInt() - 1;
    ARR1 = [];
    for (var i = 0; i < 16; i++) {
      card = next();
      if (i >= A1 * 4 && i < (A1 + 1) * 4) {
        ARR1.push(card);
      }
    }

    A2 = nextInt() - 1;
    ARR2 = [];
    for (var i = 0; i < 16; i++) {
      card = next();
      if (i >= A2 * 4 && i < (A2 + 1) * 4) {
        if (ARR1.indexOf(card) > -1) {
          count++;
          res = card;
        }
      }
    }

    if (count === 0) {
      res = VOL;
    } else if (count > 1) {
      res = MAG;
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