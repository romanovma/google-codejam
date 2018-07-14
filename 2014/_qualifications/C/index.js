// node index.js < C-small-practice.in > C-small-practice.out
// node index.js < C-large-practice.in > C-large-practice.out

// time: O(R * C)
// space: O(R * C)
function main() {
  var testCases = nextInt();
  var R, C, M, str, emptyLeft, tempField;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    R = nextInt();
    C = nextInt();
    M = nextInt();

    print("Case #" + testCase + ":");

    if (M === 0) {
      // print c in [0,0] and . in other places
      for (var i = 0; i < R; i++) {
        str = "";
        for (var j = 0; j < C; j++) {
          if (i === 0 && j === 0) {
            str += "c";
          } else {
            str += ".";
          }
        }
        print(str);
      }
    } else if (R * C - M === 1) {
      // print c in [0,0] and * in other places
      for (var i = 0; i < R; i++) {
        str = "";
        for (var j = 0; j < C; j++) {
          if (i === 0 && j === 0) {
            str += "c";
          } else {
            str += "*";
          }
        }
        print(str);
      }
    } else if (R === 1) {
      // print c...***
      str = "c";
      for (var i = 0; i < R * C - M - 1; i++) {
        str += ".";
      }
      for (var i = 0; i < M; i++) {
        str += "*";
      }
      print(str);
    } else if (C === 1) {
      print("c");
      for (var i = 0; i < R * C - M - 1; i++) {
        print(".");
      }
      for (var i = 0; i < M; i++) {
        print("*");
      }
    } else if (R === 2 && !(M % 2) && (R * C - M) >= 4) {
      // print c.*
      //       ..*
      for (var i = 0; i < R; i++) {
        str = "";
        for (var j = 0; j < C; j++) {
          if (i === 0 && j === 0) {
            str += "c";
          } else if (j <= (R * C - M) / 2 - 1) {
            str += ".";
          } else {
            str += "*";
          }
        }
        print(str);
      }
    } else if (C === 2 && !(M % 2) && (R * C - M) >= 4) {
      // print c.
      //       ..
      //       **
      for (var i = 0; i < R; i++) {
        str = "";
        for (var j = 0; j < C; j++) {
          if (i === 0 && j === 0) {
            str += "c";
          } else if (i <= (R * C - M) / 2 - 1) {
            str += ".";
          } else {
            str += "*";
          }
        }
        print(str);
      }
    } else if (R * C - M === 4) {
      // c.*
      // ..*
      // ***
      for (var i = 0; i < R; i++) {
        str = "";
        for (var j = 0; j < C; j++) {
          if (i === 0 && j === 0) {
            str += "c";
          } else if (i <= 1 && j <= 1) {
            str += ".";
          } else {
            str += "*";
          }
        }
        print(str);
      }
    } else if (R * C - M === 6 && R >= 3 && C >= 3) {
      // c..
      // ...
      // ***
      for (var i = 0; i < R; i++) {
        str = "";
        for (var j = 0; j < C; j++) {
          if (i === 0 && j === 0) {
            str += "c";
          } else if (i <= 1 && j <= 2) {
            str += ".";
          } else {
            str += "*";
          }
        }
        print(str);
      }
    } else if (R * C - M === 8 && R >= 3 && C >= 3) {
      // c..
      // ...
      // ..*
      for (var i = 0; i < R; i++) {
        str = "";
        for (var j = 0; j < C; j++) {
          if (i === 0 && j === 0) {
            str += "c";
          } else if (i <= 2 && j <= 2 && !(i === 2 && j === 2)) {
            str += ".";
          } else {
            str += "*";
          }
        }
        print(str);
      }
    } else if (R >= 3 && C >= 3 && (R * C - M >= 9) && ((R * C - M) % 2)) {
      tempField = [];
      for (var i = 0; i < R; i++) {
        tempField.push([]);
      }

      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          if (i === 0 && j === 0) {
            tempField[i][j] = "c";
          } else {
            tempField[i][j] = ".";
          }
        }
      }
      emptyLeft = R * C - M - 9;
      // first 2 rows
      for (var j = 3; j < C; j++) {
        if (emptyLeft) {
          tempField[0][j] = '.';
          tempField[1][j] = '.';
          emptyLeft = emptyLeft - 2;
        } else {
          tempField[0][j] = '*';
          tempField[1][j] = '*';
        }
      }
      // first 2 columns
      for (var i = 3; i < R; i++) {
        if (emptyLeft) {
          tempField[i][0] = '.';
          tempField[i][1] = '.';
          emptyLeft = emptyLeft - 2;
        } else {
          tempField[i][0] = '*';
          tempField[i][1] = '*';
        }
      }
      // 3rd row and 3rd column
      for (var j = 3; j < C; j++) {
        if (emptyLeft) {
          tempField[2][j] = '.';
          emptyLeft--;
        } else {
          tempField[2][j] = '*';
        }
      }
      for (var i = 3; i < R; i++) {
        if (emptyLeft) {
          tempField[i][2] = '.';
          emptyLeft--;
        } else {
          tempField[i][2] = '*';
        }
      }
      // others
      for (var i = 3; i < R; i++) {
        for (var j = 3; j < C; j++) {
          if (emptyLeft) {
            tempField[i][j] = '.';
            emptyLeft--;
          } else {
            tempField[i][j] = '*';
          }
        }
      }
      // print
      for (var i = 0; i < R; i++) {
        print(tempField[i].join(""));
      }
    } else if (R >= 3 && C >= 3 && (R * C - M >= 9) && !((R * C - M) % 2)) {
      tempField = [];
      for (var i = 0; i < R; i++) {
        tempField.push([]);
      }
      tempField[0][0] = "c";
      tempField[0][1] = ".";
      tempField[1][0] = ".";
      tempField[1][1] = ".";
      emptyLeft = R * C - M - 4;
      // first 2 rows
      for (var j = 2; j < C; j++) {
        if (emptyLeft) {
          tempField[0][j] = '.';
          tempField[1][j] = '.';
          emptyLeft = emptyLeft - 2;
        } else {
          tempField[0][j] = '*';
          tempField[1][j] = '*';
        }
      }
      // first 2 columns
      for (var i = 2; i < R; i++) {
        if (emptyLeft) {
          tempField[i][0] = '.';
          tempField[i][1] = '.';
          emptyLeft = emptyLeft - 2;
        } else {
          tempField[i][0] = '*';
          tempField[i][1] = '*';
        }
      }
      // others
      for (var i = 2; i < R; i++) {
        for (var j = 2; j < C; j++) {
          if (emptyLeft) {
            tempField[i][j] = '.';
            emptyLeft--;
          } else {
            tempField[i][j] = '*';
          }
        }
      }
      // print
      for (var i = 0; i < R; i++) {
        print(tempField[i].join(""));
      }
    } else {
      print("Impossible");
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

process.stdin.on("data", function (chunk) {
  inputBuffer += chunk;
});

process.stdin.on("end", function () {
  inputBuffer = inputBuffer.split(/[\s]+/);
  main();
});