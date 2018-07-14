// node index.js < D-small-practice.in > D-small-practice.out
// node index.js < D-large-practice.in > D-large-practice.out

// time: O(1)
// space: O(1)
function main() {
  var testCases = nextInt();
  var R, naomi, ken, war, dwar, kCounter, nCounter;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    N = nextInt();

    naomi = [];
    for (var i = 0; i < N; i++) {
      naomi.push(+next());
    }
    naomi = naomi.sort((a, b) => a - b);

    ken = [];
    for (var i = 0; i < N; i++) {
      ken.push(+next());
    }
    ken = ken.sort((a, b) => a - b);

    // count War
    war = N;
    kCounter = 0;
    for (var i = 0; i < N; i++) {
      for (j = kCounter; j < N; j++) {
        if (ken[j] > naomi[i]) {
          kCounter = j + 1;
          war--;
          break;
        }
      }
    }

    // count Deceitful War
    dwar = 0;
    nCounter = 0;
    for (var i = 0; i < N; i++) {
      for (j = nCounter; j < N; j++) {
        if (naomi[j] > ken[i]) {
          nCounter = j + 1;
          dwar++;
          break;
        }
      }
    }

    print("Case #" + testCase + ": " + dwar + ' ' + war);
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