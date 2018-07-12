// node index.js < C-small-practice.in > C-small-practice.out
// node index.js < C-large-practice.in > C-large-practice.out

// time: O(l)
// space: O(l)
function main() {
  var testCases = nextInt();
  var l, x, str, longStr, mult, multTotal, valueChars, iMult, jMult, iFound, iFoundi, jFound, res;
  var mask = [
    [0, 1, 2, 3, 4],
    [1, 1, 2, 3, 4],
    [2, 2, -1, 4, -3],
    [3, 3, -4, -1, 2],
    [4, 4, 3, -2, -1]
  ]

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    l = nextInt();
    x = nextInt();
    str = next().split("").map(ch => {
      switch (ch) {
        case '1':
          return 1;
          break;
        case 'i':
          return 2;
          break;
        case 'j':
          return 3;
          break;
        case 'k':
          return 4;
          break;
      }
    });
    iFound = false;
    jFound = false;
    res = "NO";

    // check for -1 equality
    mult = 1;
    for (var i = 0; i < l; i++) {
      mult = multiply(mult, str[i]);
    }
    multTotal = 1;
    for (var i = 0; i < x % 4; i++) {
      multTotal = multiply(multTotal, mult);
    }

    if (multTotal === -1) {
      valueChars = x >= 8 ? 8 : x;
      longStr = [];
      for (var i = 0; i < valueChars; i++) {
        longStr = longStr.concat(str);
      }

      // find i
      iMult = 1;
      for (var i = 0; i < longStr.length; i++) {
        iMult = multiply(iMult, longStr[i]);
        if (iMult === 2) {
          iFound = true;
          iFoundi = i;
          break;
        }
      }

      if (iFound) {
        // find j
        jMult = 1;
        for (var i = iFoundi + 1; i < longStr.length; i++) {
          jMult = multiply(jMult, longStr[i]);
          if (jMult === 3) {
            res = "YES";
            break;
          }
        }
      }
    }

    print("Case #" + testCase + ": " + res);
  }

  function multiply(a, b) {
    return mask[a >= 0 ? a : -a][b >= 0 ? b : -b] * (a * b / Math.abs(a * b));
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