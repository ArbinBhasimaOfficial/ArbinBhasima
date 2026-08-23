import React from "react";
import MainLayout from "./components/layout/main-layout";

type Move = "Rock" | "Paper" | "Scissors";
type Winner = "human" | "ai" | "draw";

const choices: Move[] = ["Rock", "Paper", "Scissors"];

const winPair: Record<Move, Move> = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

function determineWinner(humanMove: Move, aiMove: Move): Winner {
  if (humanMove === aiMove) return "draw";
  return winPair[humanMove] === aiMove ? "human" : "ai";
}

export default function RockPaperScissors() {
  const [humanMove, setHumanMove] = React.useState<Move | undefined>(undefined);
  const [aiMove, setAiMove] = React.useState<Move | undefined>(undefined);
  const [winner, setWinner] = React.useState<Winner | undefined>(undefined);

  function handleClick(move: Move) {
    setHumanMove(move);

    const randomMoveIndex = Math.floor(Math.random() * choices.length);
    const moveByAI = choices[randomMoveIndex];
    setAiMove(moveByAI);

    const winnerPlayer = determineWinner(move, moveByAI);
    setWinner(winnerPlayer);
  }

  return (
    <MainLayout>
      <style>{`
        .game-btn {
          padding: 15px;
          border-radius: 30px;
          background-color: black;
          border: 2px solid cyan;
          color: cyan;
          cursor: pointer;
          transition: 0.2s;
          width: 100%;
        }
        .game-btn:hover {
          background-color: cyan;
          color: black;
          border: 2px solid black;
        }
        .rock-paper-scissors-text {
          margin-block-start: 40px;
        }
      `}</style>
      <div className="rock-paper-scissors-container">
        <div className="rock-paper-scissors-Header">
          <h1>Welcome to Rock, Paper and Scissors.</h1>
        </div>
        <div className="rock-paper-scissors-text">
          <p>Choose your move:</p>
        </div>

        <ChoicesFunc handleClick={handleClick} />

        <div className="rock-paper-scissors-text">
          <p>Your move: {humanMove ?? "You haven't chosen a move yet."}</p>
        </div>
        <div className="rock-paper-scissors-text">
          <p>Zion's move: {aiMove ?? "Zion will play when you choose your move."}</p>
        </div>
        <div className="rock-paper-scissors-text">
          <GameState winner={winner} />
        </div>
      </div>
    </MainLayout>
  );
}

function ChoicesFunc({ handleClick }: { handleClick: (move: Move) => void }) {
  return (
    <div
      style={{
        display: "flex",
        marginBlockStart: "40px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "30px",
      }}
    >
      {choices.map((choice) => (
        <button
          key={choice}
          onClick={() => handleClick(choice)}
          className="game-btn"
        >
          {choice}
        </button>
      ))}
    </div>
  );
}

function GameState({ winner }: { winner: Winner | undefined }) {
  if (winner === "draw") return <div>It's a draw!</div>;
  if (winner === "human") return <div>You win!</div>;
  if (winner === "ai") return <div>Zion wins!</div>;
  return <div>No Winner Yet</div>;
}
