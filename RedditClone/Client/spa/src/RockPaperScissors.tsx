
import React from "react";
import MainLayout from "./components/layout/main-layout";

type Move = "Rock" | "Paper" | "Scissors";
const choices = ["Rock", "Paper", "Scissors"];
const movesAI: Move[] = ["Rock", "Paper", "Scissors"];
const winPair: Record<Move, Move> = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

function RockPaperScissors() {
  const [humanMove, setHumanMove] = React.useState<Move | undefined>(undefined);
  const [aiMove, setAiMove] = React.useState<Move | undefined>(undefined);
  const [winner, setWinner] = React.useState<"human" | "ai" | "draw" | undefined>(undefined);

  function handleClick(move: Move) {
    setHumanMove(move); // async in nature

    // chose a move for ai
    const randomMoveIndex = Math.floor(Math.random() * movesAI.length);
    const moveByAI = movesAI[randomMoveIndex];
    setAiMove(moveByAI);

    const winnerPlayer = determineWinner(move, moveByAI);
    setWinner(winnerPlayer);
  }

  // find out winner
  function determineWinner(humanMove: Move, aiMove: Move) {
    if (humanMove === aiMove)
      return "draw"
    else {
      if (humanMove === "Rock") {
        if (aiMove === "Paper") {
          return "ai"
        } else {
          return "human"
        }
      } else if (humanMove === "Paper") {
        if (aiMove === "Scissors") {
          return "ai"
        } else {
          return "human"
        }
      } else if (humanMove === "Scissors") {
        if (aiMove === "Rock") {
          return "ai"
        } else {
          return "human"
        }
      }
    }
  }


  // on mount, on update, calls handleClick 2 times
  // on unmount

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
        <div
          className="rock-paper-scissors-text"
        >
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
          <GameState winner={winner}/>
        </div>
      </div>
    </MainLayout>
  );
}

function ChoicesFunc(props: { handleClick: (move: Move) => void }) {
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
        <button key={choice} onClick={() => {
          props.handleClick(choice as Move);
        }}  className="game-btn">
          {choice}
        </button>
      ))}
    </div>
  );
}

function GameState(props: { winner: "human" | "ai" | "draw" | undefined }) {
  if (props.winner === "draw") return <div>It's a draw!</div>
  else if (props.winner === "human") return <div>You win!</div>
  else if (props.winner === "ai") return <div>Zion wins!</div>
  else return <div>No Winner Yet</div>
}

export default RockPaperScissors;
