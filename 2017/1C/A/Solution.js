// node Solution.js < A-small-practice.in > A-small.out
// node Solution.js < A-large-practice.in > A-large.out

// O(NlogN)
function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    var N = nextInt();
    var K = nextInt();
    var i;
    var pancs = [];

    for (i = 0; i < N; i++) {
      pancs.push({ R: nextInt(), H: nextInt() });
    }

    pancs = pancs.map(val => {
      val.H = hSquare(val.H, val.R);
      return val;
    });

    var Hs = [...pancs].sort((a, b) => b.H - a.H || b.R - a.R).slice(0, K);

    var Rs = [...pancs].sort((a, b) => b.R - a.R);
    var maxRofHs = [...Hs].sort((a, b) => b.R - a.R)[0].R;
    var smallestHofHs = Hs[K - 1].H;

    for (var i = 0; i < N - K; i++) {
      if (Rs[i].H < smallestHofHs) {
        // compare and replace
        if (
          Rs[i].R > maxRofHs &&
          rSquare(Rs[i].R) - rSquare(maxRofHs) + Rs[i].H > Hs[K - 1].H
        ) {
          Hs[K - 1] = {
            H: Rs[i].H,
            R: Rs[i].R
          };
          maxRofHs = maxRofHs > Rs[i].R ? maxRofHs : Rs[i].R;
        }
      }
    }

    var res =
      (Hs.reduce((acc, next) => acc + next.H, 0) + rSquare(maxRofHs)) * Math.PI;

    print("Case #" + testCase + ": " + res);
    // print("Case #" + testCase + ": " + brute(pancs, [], 0, K));
  }
}

// function brute(panks, res, max, K) {
//   var tmp;
//   if (res.length === K) {
//     tmp =
//       (res.reduce((acc, next) => acc + next.H, 0) +
//         rSquare([...res].sort((a, b) => b.R - a.R)[0].R)) *
//       Math.PI;
//     return tmp > max ? tmp : max;
//   }
//   for (let i = 0; i < panks.length; i++) {
//     res.push(panks[i]);
//     tmp = calc(panks.slice(0, i).concat(panks.slice(i + 1)), res, max, K);
//     max = max > tmp ? max : tmp;
//     res.pop();
//   }

//   return max;
// }

function rSquare(r) {
  return r * r;
}

function hSquare(h, r) {
  return 2 * r * h;
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
