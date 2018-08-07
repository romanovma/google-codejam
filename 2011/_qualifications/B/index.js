// node index.js < B-small-practice.in > B-small-ptactice.out
// node index.js < B-large-practice.in > B-large-ptactice.out

// time: O(N*D)
// space: O(N+D+C)
function main() {
  var testCases = nextInt();
  var C, D, N, str, Cs, Ds, opposed;

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    Cs = {};
    Ds = {};

    C = nextInt();
    for (var i = 0; i < C; i++) {
      str = next();
      Cs[str[0] + str[1]] = str[2];
      Cs[str[1] + str[0]] = str[2];
    }
    // Object.keys(Cs).forEach(key => print(key + '  :   ' + Cs[key]));

    D = nextInt();
    for (var i = 0; i < D; i++) {
      str = next();
      if (Ds[str[0]]) {
        Ds[str[0]].push(str[1]);
      } else {
        Ds[str[0]] = [str[1]];
      }
      if (Ds[str[1]]) {
        Ds[str[1]].push(str[0]);
      } else {
        Ds[str[1]] = [str[0]];
      }
    }
    // Object.keys(Ds).forEach(key => print(key + '  :   ' + Ds[key]));

    N = nextInt();
    str = next().split('');

    opposed = {};
    if (Ds[str[0]]) {
      Ds[str[0]].map(function(el) {
        opposed[el] = 1;
      });
    }

    res = [];
    res.push(str[0]);

    for (var i = 1; i < N; i++) {
      if (res.length > 0 && Cs[res[res.length - 1] + str[i]]) {
        // match
        if (Ds[res[res.length - 1]]) {
          Ds[res[res.length - 1]].map(function(el) {
            if (opposed[el]) {
              opposed[el]--;
            }
          });
        }
        res[res.length - 1] = Cs[res[res.length - 1] + str[i]];
      } else if (opposed[str[i]]) {
        // opposed
        res = [];
        opposed = {};
      } else {
        // normal
        if (Ds[str[i]]) {
          Ds[str[i]].map(function(el) {
            if (!opposed[el]) {
              opposed[el] = 1;
            } else {
              opposed[el]++;
            }
          });
        }

        res.push(str[i]);
      }
      // print(res.join(''));
    }

    print('Case #' + testCase + ': ' + '[' + res.join(', ') + ']');
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
var inputBuffer = '',
  curLine = 0;

function readline() {
  return inputBuffer[curLine++];
}

function print(data) {
  process.stdout.write(data + '\n');
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  inputBuffer += chunk;
});

process.stdin.on('end', function() {
  inputBuffer = inputBuffer.split(/[\s]+/);
  main();
});
