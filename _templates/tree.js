function Tree(directed) {
  this.directed = !!directed;
  this.edges = [];
  this.initSearch();
}

Tree.prototype.addEdge = function(v1, v2, directed) {
  if (!this.edges[v1]) {
    this.edges[v1] = [];
  }
  this.edges[v1].push(v2);
  if (!directed) {
    // pass true to prevent infinite loop
    this.addEdge(v2, v1, true);
  }
};

Tree.prototype.initSearch = function() {
  this.processed = [];
  this.earlyProcessed = []; // for non-recursive DFS
  this.discovered = [];
  this.parents = [];
  this.time = 0;
  this.entryTime = [];
  this.exitTime = [];
  this.found = false;
};

Tree.prototype.BFS = function(root) {
  var _this = this;
  this.queue = [];
  var v1; // current vertex
  this.queue.push(root);
  this.discovered[root] = true;
  while (this.queue.length) {
    v1 = this.queue.shift();
    //processVertexEarly(v1);
    this.processed[v1] = true;
    this.edges[v1].map(function(v2) {
      if (!_this.processed[v2] || _this.directed) {
        processEdge(v1, v2);
      }
      if (!_this.discovered[v2]) {
        _this.queue.push(v2);
        _this.discovered[v2] = true;
        _this.parents[v2] = v1;
      }
    });
    //processVertexLate(v1);
  }
};

Tree.prototype.DFSNonRecursive = function(root) {
  var _this = this;
  this.stack = [];
  var v1; // current vertex
  this.stack.unshift(root);
  this.discovered[root] = true;
  while (this.stack.length) {
    v1 = this.stack.shift();
    if (!this.earlyProcessed[v1]) {
      processVertexEarly(v1);
      this.earlyProcessed[v1] = true;
      this.stack.unshift(v1);
      // this.processed[v1] = true;
      this.edges[v1].map(function(v2) {
        // if (!_this.processed[v2] || _this.directed) {
        //   processEdge(v1, v2);
        // }
        if (!_this.discovered[v2]) {
          _this.stack.unshift(v2);
          _this.discovered[v2] = true;
          _this.parents[v2] = v1;
        }
      });
    } else {
      processVertexLate(v1);

      this.time++;
      this.exitTime[v1] = this.time;
      this.processed[v1] = true;
    }
  }
};

Tree.prototype.DFS = function(v1) {
  var _this = this;
  this.discovered[v1] = true;
  this.time++;
  this.entryTime[v1] = this.time;
  processVertexEarly(v1, this);
  this.edges[v1].map(function(v2) {
    if (!_this.discovered[v2]) {
      _this.parents[v2] = v1;

      // processEdge(v1, v2);
      _this.DFS(v2);
    } else if (!_this.processed[v2] || _this.directed) {
      // processEdge(v1, v2);
    }
  });
  processVertexLate(v1, this);

  this.time++;
  this.exitTime[v1] = this.time;
  this.processed[v1] = true;
};

function processVertexEarly(v, tree) {
  if (v === tree.x) {
    tree.found = true;
  }
}

function processVertexLate(v, tree) {
  // under root
  if (tree.parents[v] === tree.y && tree.found) {
    tree.found = false;
    this.z = v;
  }
}

var tree = new Tree(false);

// var nxy = readline();
// var n = parseInt(nxy[0]);
// var x = parseInt(nxy[1]);
// var y = parseInt(nxy[2]);
// var vals;
// tree.x = x;
// tree.y = y;

// for (var i = 0; i< n-1; i++) {
//   vals = readline();
//   tree.addEdge(parseInt(vals[0]), parseInt(vals[1]));
// }

var n = 3;
var x = 1;
var y = 3;
tree.addEdge(1, 2);
tree.addEdge(2, 3);

tree.DFS(y);

console.log(tree.entryTime);
console.log(tree.exitTime);

// -----------

function Tree(directed) {
  this.directed = !!directed;
  this.edges = [];
  this.initSearch();
}

Tree.prototype.addEdge = function(v1, v2, directed) {
  if (!this.edges[v1]) {
    this.edges[v1] = [];
  }
  this.edges[v1].push(v2);
  if (!directed) {
    // pass true to prevent infinite loop
    this.addEdge(v2, v1, true);
  }
};

Tree.prototype.initSearch = function() {
  this.processed = [];
  this.earlyProcessed = [];
  this.discovered = [];
  this.parents = [];
  this.time = 0;
  this.entryTime = [];
  this.exitTime = [];
  this.found = false;
};

Tree.prototype.BFS = function(root) {
  var _this = this;
  this.queue = [];
  var v1; // current vertex
  this.queue.push(root);
  this.discovered[root] = true;
  while (this.queue.length) {
    v1 = this.queue.shift();
    //processVertexEarly(v1);
    this.processed[v1] = true;
    this.edges[v1].map(function(v2) {
      if (!_this.processed[v2] || _this.directed) {
        processEdge(v1, v2);
      }
      if (!_this.discovered[v2]) {
        _this.queue.push(v2);
        _this.discovered[v2] = true;
        _this.parents[v2] = v1;
      }
    });
    //processVertexLate(v1);
  }
};

Tree.prototype.DFSNonRecursive = function(root) {
  var _this = this;
  this.stack = [];
  var v1; // current vertex
  this.stack.push(root);
  while (this.stack.length) {
    v1 = this.stack[this.stack.length - 1];
    this.discovered[v1] = true;
    if (!this.earlyProcessed[v1]) {
      //processVertexEarly(v1);
      this.time++;
      this.entryTime[v1] = this.time;
      if (v1 === this.x) {
        this.found = true;
      }
      this.earlyProcessed[v1] = true;
      // this.stack.unshift(v1);
      // this.processed[v1] = true;
      this.edges[v1].map(function(v2) {
        // if (!_this.processed[v2] || _this.directed) {
        //   processEdge(v1, v2);
        // }
        if (!_this.discovered[v2]) {
          _this.stack.push(v2);
          _this.discovered[v2] = true;
          _this.parents[v2] = v1;
        }
      });
    } else {
      //processVertexLate(v1);
      if (this.parents[v1] === this.y && this.found) {
        this.found = false;
        this.z = v1;
      }

      this.time++;
      this.exitTime[v1] = this.time;
      this.processed[v1] = true;
      this.stack.pop();
    }
  }
};

Tree.prototype.DFS = function(v1) {
  var _this = this;
  this.discovered[v1] = true;
  this.time++;
  this.entryTime[v1] = this.time;
  // processVertexEarly(v1, this);
  if (v1 === this.x) {
    this.found = true;
  }
  for (var i = 0; i < this.edges[v1].length; i++) {
    var v2 = this.edges[v1][i];
    if (!_this.discovered[v2]) {
      _this.parents[v2] = v1;

      // processEdge(v1, v2);
      _this.DFS(v2);
    } else if (!_this.processed[v2] || _this.directed) {
      // processEdge(v1, v2);
    }
  }
  // this.edges[v1].map(function (v2) {
  //   if (!_this.discovered[v2]) {
  //     _this.parents[v2] = v1;

  //     // processEdge(v1, v2);
  //     _this.DFS(v2);
  //   } else if (!_this.processed[v2] || _this.directed) {
  //     // processEdge(v1, v2);
  //   }
  // });
  // processVertexLate(v1, this);
  if (this.parents[v1] === this.y && this.found) {
    this.found = false;
    this.z = v1;
  }

  this.time++;
  this.exitTime[v1] = this.time;
  this.processed[v1] = true;
};

// function processVertexEarly(v, tree) {
//   if (v === tree.x) {
//     tree.found = true;
//   }
// }

// function processVertexLate(v, tree) {
//   // under root
//   if (tree.parents[v] === tree.y && tree.found) {
//     tree.found = false;
//     this.z = v;
//   }
// }

var tree = new Tree(false);

var nxy = readline().split(" ");
var n = parseInt(nxy[0]);
var x = parseInt(nxy[1]);
var y = parseInt(nxy[2]);
var vals;
tree.x = x;
tree.y = y;

for (var i = 0; i < n - 1; i++) {
  vals = readline().split(" ");
  tree.addEdge(parseInt(vals[0]), parseInt(vals[1]));
}

tree.DFSNonRecursive(y);
function calcChildren(a, tree) {
  return Math.floor((tree.exitTime[a] - tree.entryTime[a]) / 2) + 1;
}

//print(tree.entryTime);
//print(tree.exitTime);
//print(calcChildren(x, tree));
// print(calcChildren(y, tree));
// print(calcChildren(z, tree));

print(
  n * (n - 1) -
    calcChildren(x, tree) * (calcChildren(y, tree) - calcChildren(tree.z, tree))
);
