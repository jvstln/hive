let grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
];

function findWay() {
  let position = [0, 0];
  let end = [grid.length - 1, grid.length - 1];
  let queue = [];

  grid[position[0]][position[1]] = 1;
  queue.push([position]); // store a path, not just a position

  while (queue.length > 0) {
    let path = queue.shift(); // get the path out of the queue
    let pos = path[path.length - 1]; // ... and then the last position from it
    let direction = [
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] + 1],
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1],
    ];

    for (let i = 0; i < direction.length; i++) {
      if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
        // return the length of path that led to the find minus the original position
        return path.concat([end]).length - 1;
      }

      if (
        direction[i][0] < 0 ||
        direction[i][0] >= grid.length ||
        direction[i][1] < 0 ||
        direction[i][1] >= grid[0].length ||
        grid[direction[i][0]][direction[i][1]] != 0
      ) {
        continue;
      }

      grid[direction[i][0]][direction[i][1]] = 1;
      // extend and push the path on the queue
      queue.push(path.concat([direction[i]]));
    }
  }
}

let path = findWay();
console.log(path);
