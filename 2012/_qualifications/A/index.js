// node index.js < A-small-practice.in > A-small-ptactice.out

// time: O(S)
// space: O(S)
function main() {
  var testCases = nextInt();
  var G, res;
  var map = {
    'a': 'y',
    'o': 'e',
    'z': 'q'
  }
  var src = {
    "ejp mysljylc kd kxveddknmc re jsicpdrysi": "our language is impossible to understand",
    "rbcpc ypc rtcsra dkh wyfrepkym veddknkmkrkcd": "there are twenty six factorial possibilities",
    "de kr kd eoya kw aej tysr re ujdr lkgc jv": "so it is okay if you want to just give up"
  }

  // preprocess
  Object.keys(src).forEach(function (key) {
    for (var i = 0; i < key.length; i++) {
      map[key[i]] = src[key][i];
    }
  });

  // check which letters left
  // print(new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i)).filter(ch => map[ch] === undefined));

  map['q'] = 'z';

  // Object.keys(map).forEach(function (key) {
  //   print(key + '  ' + map[key]);
  // });

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    G = next();

    res = G.split("").map(ch => map[ch]).join("");

    print("Case #" + testCase + ": " + res);
  }
}

// auxiliary code
var curTokens = [],
  curToken = 0;

function next() {
  while (curToken >= curTokens.length) {
    curTokens = readline().split(/[\n]+/);
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
  inputBuffer = inputBuffer.split(/[\n]+/);
  main();
});