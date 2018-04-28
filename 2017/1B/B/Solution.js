// node Solution.js < B-small-practice.in > B-small.out
// node Solution.js < B-large-practice.in > B-large.out

// O(?)
function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    var N = nextInt();
    var unis = [];
    var mapping = ["R", "O", "Y", "G", "B", "V"];
    var i;
    var sorted = [];
    var res = [];

    for (i = 0; i < 6; i++) {
      unis.push({ label: mapping[i], num: nextInt() });
    }

    if (unis[1].num === 0 && unis[3].num === 0 && unis[5].num === 0) {
      // simple case
      res = simpleCase(unis, N);
    } else {
      // complex case
      // Only Orange + Blue
      if (unis[1].num + unis[4].num === N) {
        if (unis[1].num === unis[4].num) {
          res = [];
          for (i = 0; i < N; i++) {
            res[i] = i % 2 ? unis[1].label : unis[4].label;
          }
        } else {
          res = "IMPOSSIBLE";
        }
      }
      // Only Green + Red
      else if (unis[0].num + unis[3].num === N) {
        if (unis[1].num === unis[3].num) {
          res = [];
          for (i = 0; i < N; i++) {
            res[i] = i % 2 ? unis[0].label : unis[3].label;
          }
        } else {
          res = "IMPOSSIBLE";
        }
      }
      // Only Violette + Yellow
      else if (unis[2].num + unis[5].num === N) {
        if (unis[2].num === unis[5].num) {
          res = [];
          for (i = 0; i < N; i++) {
            res[i] = i % 2 ? unis[2].label : unis[5].label;
          }
        } else {
          res = "IMPOSSIBLE";
        }
      }

      // Orange > Blue - 1
      else if (unis[1].num > 0 && unis[1].num > unis[4].num - 1) {
        res = "IMPOSSIBLE";
      }
      // Green > Red - 1
      else if (unis[3].num > 0 && unis[3].num > unis[0].num - 1) {
        res = "IMPOSSIBLE";
      }
      // Violette > Yellow - 1
      else if (unis[5].num > 0 && unis[5].num > unis[2].num - 1) {
        res = "IMPOSSIBLE";
      }
      //
      else {
        unis[4].num = unis[4].num - unis[1].num;
        unis[0].num = unis[0].num - unis[3].num;
        unis[2].num = unis[2].num - unis[5].num;
        res = simpleCase(unis, unis[4].num + unis[0].num + unis[2].num);
        var tmp;
        if (unis[1].num) {
          tmp = "";
          for (i = 0; i < unis[1].num; i++) {
            tmp += unis[1].label + unis[4].label;
          }
          res[res.indexOf(unis[4].label)] += tmp;
        }
        if (unis[3].num) {
          tmp = "";
          for (i = 0; i < unis[3].num; i++) {
            tmp += unis[3].label + unis[0].label;
          }
          res[res.indexOf(unis[0].label)] += tmp;
        }
        if (unis[5].num) {
          tmp = "";
          for (i = 0; i < unis[5].num; i++) {
            tmp += unis[5].label + unis[2].label;
          }
          res[res.indexOf(unis[2].label)] += tmp;
        }
      }
    }

    if (res !== "IMPOSSIBLE") {
      res = res.join("");
    }

    print("Case #" + testCase + ": " + res);
  }
}

function simpleCase(unis, N) {
  var res;
  sorted = unis.filter((val, i) => i % 2 === 0).sort((a, b) => b.num - a.num);
  if (sorted[0].num > Math.floor(N / 2)) {
    res = "IMPOSSIBLE";
  } else {
    res = [];
    for (i = 0; i < sorted[0].num; i++) {
      res[i * 2] = sorted[0].label;
    }
    for (i = sorted[0].num; i < sorted[0].num + sorted[1].num; i++) {
      res[i * 2] = sorted[1].label;
    }
    for (
      i = sorted[0].num + sorted[1].num;
      i < sorted[0].num + sorted[1].num + sorted[2].num;
      i++
    ) {
      res[i * 2] = sorted[2].label;
    }
    for (i = 0; i < N; i++) {
      res[2 * i + 1] = res[N + 2 * i + N % 2];
    }
    res = res.slice(0, N);
  }
  return res;
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
