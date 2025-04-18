import React, { useState, useEffect } from 'react';

const Gemsweeper = () => {
  const [board, setBoard] = useState<string[][]>([]);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [gemCount, setGemCount] = useState(10);
  const [flagsPlaced, setFlagsPlaced] = useState(0);
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [revealedBoard, setRevealedBoard] = useState<boolean[][]>([]);
  const [flaggedBoard, setFlaggedBoard] = useState<boolean[][]>([]);

  useEffect(() => {
    generateBoard();
  }, [rows, cols, gemCount]);

  const generateBoard = () => {
    // 1. Reset game state
    setGameStatus('playing');
    setRevealedBoard(Array(rows).fill(null).map(() => Array(cols).fill(false)));
    setFlaggedBoard(Array(rows).fill(null).map(() => Array(cols).fill(false)));
    setFlagsPlaced(0);


    // 2. Initialize empty board
    let newBoard = Array(rows).fill(null).map(() => Array(cols).fill(''));
    let gemsPlaced = 0;

    // 2. Place gems randomly
    while (gemsPlaced < gemCount) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (newBoard[row][col] !== 'G') {
        newBoard[row][col] = 'G';
        gemsPlaced++;
      }
    }

    // 3. Calculate numbers
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (newBoard[i][j] !== 'G') {
          let adjacentGems = 0;
          for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
              if (x === 0 && y === 0) continue;
              const ni = i + x;
              const nj = j + y;
              if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && newBoard[ni][nj] === 'G') {
                adjacentGems++;
              }
            }
          }
          if (adjacentGems > 0) {
            newBoard[i][j] = String(adjacentGems);
          } else {
            newBoard[i][j] = ' '; // Represent empty cells with space
          }
        }
      }
    }
    setBoard(newBoard);
  };

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    if (gameStatus !== 'playing' || revealedBoard[rowIndex][colIndex] || flaggedBoard[rowIndex][colIndex]) return;

    const cellValue = board[rowIndex][colIndex];
    let updatedRevealedBoard = [...revealedBoard];
    updatedRevealedBoard[rowIndex][colIndex] = true;
    setRevealedBoard(updatedRevealedBoard);


    if (cellValue === 'G') {
      // Game Over - Player Lost
      setGameStatus('lost');
      revealAllGems();
    } else if (cellValue === ' ') {
      // Reveal empty cells and adjacent numbers
      revealEmptyCells(rowIndex, colIndex, updatedRevealedBoard);
    } else {
      // Check for win condition after revealing a number
      checkWinCondition();
    }
  };

  const handleRightClick = (e: React.MouseEvent, rowIndex: number, colIndex: number) => {
    e.preventDefault(); // Prevent default context menu

    if (gameStatus !== 'playing' || revealedBoard[rowIndex][colIndex]) return;

    let updatedFlaggedBoard = [...flaggedBoard];
    updatedFlaggedBoard[rowIndex][colIndex] = !updatedFlaggedBoard[rowIndex][colIndex];
    setFlaggedBoard(updatedFlaggedBoard);

    if (updatedFlaggedBoard[rowIndex][colIndex]) {
      setFlagsPlaced(flagsPlaced + 1);
    } else {
      setFlagsPlaced(flagsPlaced - 1);
    }
  };

  const revealEmptyCells = (r: number, c: number, currentRevealedBoard: boolean[][]) => {
    const queue = [[r, c]];
    currentRevealedBoard[r][c] = true;

    while (queue.length > 0) {
      const [row, col] = queue.shift()!; // ! to assert not null

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;
          const ni = row + x;
          const nj = col + y;

          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && !currentRevealedBoard[ni][nj]) {
            currentRevealedBoard[ni][nj] = true;
            if (board[ni][nj] === ' ') {
              queue.push([ni, nj]);
            }
          }
        }
      }
    }
    setRevealedBoard(currentRevealedBoard);
  };


  const revealAllGems = () => {
    let updatedRevealedBoard = [...revealedBoard];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === 'G') {
          updatedRevealedBoard[i][j] = true;
        }
      }
    }
    setRevealedBoard(updatedRevealedBoard);
  };

  const checkWinCondition = () => {
    let revealedCount = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (revealedBoard[i][j] && board[i][j] !== 'G') {
          revealedCount++;
        }
      }
    }
    const nonGemCells = (rows * cols) - gemCount;
    if (revealedCount === nonGemCells) {
      setGameStatus('won');
    }
  };


  return (
    <div>
      <h1>Gemsweeper</h1>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 20px)` }}>
        {board.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <div
              key={'cell-' + rowIndex + '-' + colIndex}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
              style={{
                width: '20px',
                height: '20px',
                border: '1px solid black',
                textAlign: 'center',
                cursor: 'pointer',
                userSelect: 'none',
                backgroundColor: revealedBoard[rowIndex][colIndex] ? '#eee' : flaggedBoard[rowIndex][colIndex] ? 'yellow' : '#ccc' //revealed or not
              }}
            >
              {revealedBoard[rowIndex][colIndex] ? cell : flaggedBoard[rowIndex][colIndex] ? 'F' : ''}
            </div>
          ))
        ))}
      </div>
      <div>
        <p>Gems: {gemCount}</p>
        <p>Flags placed: {flagsPlaced}</p>
        <p>Game Status: {gameStatus}</p>
      </div>
      {gameStatus !== 'playing' && (
        <button onClick={generateBoard}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default Gemsweeper;
