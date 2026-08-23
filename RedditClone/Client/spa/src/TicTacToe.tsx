import React from "react";
import MainLayout from "./components/layout/main-layout";

type Player = "X" | "O";
type BoardState = (Player | null)[];
type Winner = Player | "draw" | null;

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

function checkWinner(board: BoardState): Winner {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every((cell) => cell !== null)) {
    return "draw";
  }
  return null;
}

export default function TicTacToe() {
  const [board, setBoard] = React.useState<BoardState>(Array(9).fill(null));
  const [isHumanTurn, setIsHumanTurn] = React.useState<boolean>(true);
  const [winner, setWinner] = React.useState<Winner>(null);

  function handleCellClick(index: number) {
    // Prevent move if cell taken, game over, or AI is thinking
    if (board[index] || winner || !isHumanTurn) return;

    // 1. Human Move
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    setIsHumanTurn(false);

    // 2. Zion (AI) Move with slight delay for natural feel
    setTimeout(() => {
      makeAiMove(newBoard);
    }, 400);
  }

  function makeAiMove(currentBoard: BoardState) {
    const emptyIndices = currentBoard
      .map((val, idx) => (val === null ? idx : null))
      .filter((val): val is number => val !== null);

    if (emptyIndices.length === 0) return;

    // AI selects a random open square
    const randomIndex = Math.floor(Math.random() * emptyIndices.length);
    const aiChoice = emptyIndices[randomIndex];

    const updatedBoard = [...currentBoard];
    updatedBoard[aiChoice] = "O";
    setBoard(updatedBoard);

    const gameWinner = checkWinner(updatedBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsHumanTurn(true);
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsHumanTurn(true);
    setWinner(null);
  }

  return (
    <MainLayout>
      <style>{`
        .ttt-grid {
          display: grid;
          grid-template-columns: repeat(3, 100px);
          grid-template-rows: repeat(3, 100px);
          gap: 12px;
          justify-content: center;
          margin-block-start: 30px;
        }
        .ttt-cell {
          width: 100px;
          height: 100px;
          border-radius: 12px;
          background-color: black;
          border: 2px solid cyan;
          color: cyan;
          font-size: 2.5rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ttt-cell:hover:not(:disabled) {
          background-color: cyan;
          color: black;
          border: 2px solid black;
        }
        .ttt-cell:disabled {
          cursor: not-allowed;
        }
        .ttt-action-btn {
          padding: 12px 24px;
          border-radius: 30px;
          background-color: black;
          border: 2px solid cyan;
          color: cyan;
          cursor: pointer;
          font-weight: bold;
          transition: 0.2s;
        }
        .ttt-action-btn:hover {
          background-color: cyan;
          color: black;
          border: 2px solid black;
        }
        .ttt-text {
          margin-block-start: 24px;
          text-align: center;
        }
      `}</style>

      <div className="tic-tac-toe-container">
        <div className="tic-tac-toe-header">
          <h1>Welcome to Tic Tac Toe.</h1>
        </div>

        <BoardFunc board={board} handleCellClick={handleCellClick} disabled={!isHumanTurn || !!winner} />

        <div className="ttt-text">
          <p>You are <strong>X</strong> | Zion is <strong>O</strong></p>
        </div>

        <div className="ttt-text">
          <GameState winner={winner} isHumanTurn={isHumanTurn} />
        </div>

        {(winner || board.some((cell) => cell !== null)) && (
          <div className="ttt-text">
            <button className="ttt-action-btn" onClick={resetGame}>
              Reset Game
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

function BoardFunc({
  board,
  handleCellClick,
  disabled,
}: {
  board: BoardState;
  handleCellClick: (index: number) => void;
  disabled: boolean;
}) {
  return (
    <div className="ttt-grid">
      {board.map((cell, idx) => (
        <button
          key={idx}
          className="ttt-cell"
          onClick={() => handleCellClick(idx)}
          disabled={disabled || cell !== null}
        >
          {cell}
        </button>
      ))}
    </div>
  );
}

function GameState({ winner, isHumanTurn }: { winner: Winner; isHumanTurn: boolean }) {
  if (winner === "draw") return <div>It's a draw!</div>;
  if (winner === "X") return <div>You win!</div>;
  if (winner === "O") return <div>Zion wins!</div>;
  return <div>{isHumanTurn ? "Your turn to move..." : "Zion is thinking..."}</div>;
}
