// node Solution.js < C-small-practice.in > C-small.out
// node Solution.js < C-large-practice.in > C-large.out

// O(N^3)
function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    var N = nextInt();
    var Q = nextInt();
    var i, j, k;
    var horses = [];
    for (i = 0; i < N; i++) {
      horses.push({ endur: nextInt(), speed: nextInt() });
    }
    var cities = [];
    var tmp, tmpVal;
    for (i = 0; i < N; i++) {
      tmp = [];
      for (j = 0; j < N; j++) {
        tmpVal = nextInt();
        if (i === j) {
          tmpVal = 0;
        }
        tmp.push(tmpVal === -1 ? Infinity : tmpVal);
      }
      cities.push(tmp);
    }

    goals = [];
    for (i = 0; i < Q; i++) {
      goals.push([nextInt(), nextInt()]);
    }

    // calculate shortes distances
    for (k = 0; k < N; k++) {
      for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
          if (cities[i][j] > cities[i][k] + cities[k][j]) {
            cities[i][j] = cities[i][k] + cities[k][j];
          }
        }
      }
    }

    // calculate time
    for (i = 0; i < N; i++) {
      for (j = 0; j < N; j++) {
        if (i !== j) {
          if (cities[i][j] <= horses[i].endur) {
            cities[i][j] = cities[i][j] / horses[i].speed;
          } else {
            cities[i][j] = Infinity;
          }
        }
      }
    }

    // calculate shortes time
    for (k = 0; k < N; k++) {
      for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
          if (cities[i][j] > cities[i][k] + cities[k][j]) {
            cities[i][j] = cities[i][k] + cities[k][j];
          }
        }
      }
    }

    var res = [];
    for (i = 0; i < Q; i++) {
      res.push(cities[goals[i][0] - 1][goals[i][1] - 1]);
    }

    print("Case #" + testCase + ": " + res.join(" "));
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
