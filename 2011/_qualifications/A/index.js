// node index.js < A-small-practice.in > A-small-ptactice.out
// node index.js < A-large-practice.in > A-large-ptactice.out

// time: O(N)
// space: O(1)
function main() {
  var testCases = nextInt();
  var data, N, O, B, res, cur, curRange, lastRobot, lastNums, step;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    N = nextInt();
    // print('N:   ' + N);
    data = [];
    for (var i = 0; i < 2 * N; i++) {
      data.push(next());
    }

    // print(data.map((val, i) => i % 2 ? val + " " : val).join(""));

    lastNums = {
      O: 1,
      B: 1
    }

    // remember last robot pressed the button
    lastRobot = data.shift();

    // move to first element and press button
    first = +data.shift();
    res = first;
    curRange = first;
    lastNums[lastRobot] = first;

    for (var i = 0; i < 2 * (N - 1); i += 2) {
      cur = {
        robot: data[i],
        num: +data[i + 1]
      }
      if (lastRobot === cur.robot) {
        step = Math.abs(cur.num - lastNums[lastRobot]) + 1
        res += step;
        curRange += step;
        lastNums[lastRobot] = cur.num;
      } else {
        diff = Math.abs(cur.num - lastNums[cur.robot]) + 1;
        curRange = diff > curRange ? diff - curRange : 1;
        res += curRange;
        lastNums[cur.robot] = cur.num;
        lastRobot = cur.robot;
      }
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