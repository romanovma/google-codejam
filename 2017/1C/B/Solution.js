// node Solution.js < B-small-practice.in > B-small.out
// node Solution.js < B-large-practice.in > B-large.out

// O(NlogN)
function main() {
  var testCases = nextInt();
  var AC, AJ, DC, JK, full, DCSUm, JKSum, res, gaps, gapsDC, gapsJK;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    res = 0;
    AC = nextInt();
    AJ = nextInt();

    DC = [];
    for (var i = 0; i < AC; i++) {
      DC.push({
        start: nextInt(),
        end: nextInt(),
        parent: 0
      });
    }

    JK = [];
    for (var i = 0; i < AJ; i++) {
      JK.push({
        start: nextInt(),
        end: nextInt(),
        parent: 1
      });
    }

    full = DC.concat(JK).sort((a, b) => a.start - b.start);

    DCSUm = full.filter(interv => interv.parent === 0).reduce((a, b) => a + (b.end - b.start), 0);
    JKSum = full.filter(interv => interv.parent === 1).reduce((a, b) => a + (b.end - b.start), 0);

    gapsDC = [];
    gapsJK = [];
    for (let i = 0; i < full.length; i++) {
      if (i === full.length - 1) {
        if (full[i].parent !== full[0].parent) {
          res++;
        } else {
          let gap = 24 * 60 + (full[0].start - full[i].end);
          full[i].parent ? gapsJK.push(gap) : gapsDC.push(gap);
        }
      } else {
        if (full[i].parent !== full[i + 1].parent) {
          res++;
        } else {
          let gap = full[i + 1].start - full[i].end;
          full[i].parent ? gapsJK.push(gap) : gapsDC.push(gap);
        }
      }
    }


    gapsDC = gapsDC.sort((a, b) => a - b);
    gapsJK = gapsJK.sort((a, b) => a - b);
    // console.log(DCSUm, JKSum, gapsDC, gapsJK);

    while (DCSUm <= 12 * 60 && gapsDC.length > 0) {
      DCSUm += gapsDC.shift();
    }

    if (DCSUm > 12 * 60) {
      res += (gapsDC.length + 1) * 2;
    }

    // console.log(DCSUm, gapsDC);

    while (JKSum <= 12 * 60 && gapsJK.length > 0) {
      JKSum += gapsJK.shift();
    }

    if (JKSum > 12 * 60) {
      res += (gapsJK.length + 1) * 2;
    }

    // console.log(JKSum, gapsJK);


    // console.log(res);


    print("Case #" + testCase + ": " + (res < 2 ? 2 : res));
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