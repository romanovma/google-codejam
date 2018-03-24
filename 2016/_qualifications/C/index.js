// node index.js < A-small.in > A-small.out

function main() {
  var testCases = nextInt();

  for (var testCase = 1; testCase <= testCases; ++testCase) {
    print("Case #" + testCase + ":");
    var n = nextInt();
    var j = nextInt();

    // var counter = 0;
    var current = [];
    for (let i = 0; i < n - 2; i++) {
      current[i] = "+";
    }

    // we need object to pass by reference
    var data = {
      counter: 0,
      k: -1
    };
    backtrack(current, data, j);
  }
}

function backtrack(current, data, j) {
  if (is_a_solution(current)) {
    process_solution(current, data);
  }
  if (data.k === current.length - 1 || data.counter === j) {
    return;
  }
  data.k++;
  candidates = construct_candidates(current, data.k);
  for (let i = 0; i < candidates.length; i++) {
    make_move(current, data.k, candidates[i]);
    backtrack(current, data, j);
    if (data.counter === j) {
      return;
    }
    unmake_move(current, data.k);
  }
  data.k--;
}

function is_a_solution(current) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < current.length; i++) {
    if (current[i] === "+") return false;
    if (i % 2) {
      odd = odd + current[i];
    } else {
      even = even + current[i];
    }
  }

  return odd === even;
}

function process_solution(current, data) {
  data.counter++;
  print("1" + current.join("") + "1" + " " + "3 4 5 6 7 8 9 10 11");
}

function construct_candidates(current, k) {
  return [0, 1];
}

function make_move(current, k, candidate) {
  current[k] = candidate;
}

function unmake_move(current, k) {
  current[k] = "+";
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
