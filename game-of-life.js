function gameOfLife(board) {
  function getNeigbour(row, col) {
    const top = board[row - 1] ? board[row - 1][col] : 0;
    const bottom = board[row + 1] ? board[row + 1][col] : 0;
    const left = board[row][col - 1] ? board[row][col - 1] : 0;
    const right = board[row][col + 1] ? board[row][col + 1] : 0;
    const topRight = board[row - 1] ? board[row - 1][col + 1] : 0;
    const topLeft = board[row - 1] ? board[row - 1][col - 1] : 0;
    const bottomRight = board[row + 1] ? board[row + 1][col + 1] : 0;
    const bottomLeft = board[row + 1] ? board[row + 1][col - 1] : 0;

    const neighbours = [
      top,
      bottom,
      left,
      right,
      topRight,
      topLeft,
      bottomRight,
      bottomLeft,
    ];

    return {
      life: neighbours.filter((neighbour) => neighbour === 1).length,
      dead: neighbours.filter((neighbour) => neighbour === 0).length,
    };
  }

  const newBoard = [];

  board.forEach((row, rowIndex) => {
    const newRow = [];
    newBoard.push(newRow);

    row.forEach((col, colIndex) => {
      const { life } = getNeigbour(rowIndex, colIndex);
      const isLife = board[rowIndex][colIndex] === 1;

      if (isLife && (life < 2 || life > 3)) {
        newRow.push(0);
      } else if (isLife && (life === 2 || life === 3)) {
        newRow.push(1);
      } else if (!isLife && life === 3) {
        newRow.push(1);
      } else {
        newRow.push(board[rowIndex][colIndex]);
      }
    });
  });

  return newBoard;
}

const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
];

console.log(gameOfLife(board));
