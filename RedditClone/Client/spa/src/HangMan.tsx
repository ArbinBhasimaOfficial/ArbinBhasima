import React from "react";
import MainLayout from "./components/layout/main-layout";

const WORDS = [
  "REACT",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "COMPONENT",
  "DEVELOPER",
  "PROGRAMMING",
  "FRONTEND",
];

const MAX_MISTAKES = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Visual ASCII representation of the Hangman state (backslashes properly escaped)
const HANGMAN_STAGES = [
  `
  +---+
  |   |
      |
      |
      |
      |
========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
========`,
];

export default function Hangman() {
  const [word, setWord] = React.useState<string>("");
  const [guessedLetters, setGuessedLetters] = React.useState<Set<string>>(new Set());

  React.useEffect(() => {
    resetGame();
  }, []);

  const mistakes = Array.from(guessedLetters).filter(
    (letter) => !word.includes(letter)
  ).length;

  const isWon = word !== "" && word.split("").every((letter) => guessedLetters.has(letter));
  const isLost = mistakes >= MAX_MISTAKES;

  const handleGuess = React.useCallback(
    (letter: string) => {
      if (guessedLetters.has(letter) || isWon || isLost) return;
      setGuessedLetters((prev) => new Set(prev).add(letter));
    },
    [guessedLetters, isWon, isLost]
  );

  // Physical keyboard support
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        handleGuess(key);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleGuess]);

  function resetGame() {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    setWord(WORDS[randomIndex]);
    setGuessedLetters(new Set());
  }

  return (
    <MainLayout>
      <style>{`
        .hangman-drawing {
          font-family: monospace;
          white-space: pre;
          color: cyan;
          background-color: black;
          padding: 15px;
          border-radius: 12px;
          border: 2px solid cyan;
          width: fit-content;
          margin: 20px auto 0;
          font-size: 1.1rem;
          line-height: 1.2;
        }
        .word-display {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-block-start: 30px;
        }
        .letter-tile {
          font-size: 2rem;
          font-weight: bold;
          color: cyan;
          border-bottom: 4px solid cyan;
          width: 40px;
          text-align: center;
          height: 45px;
        }
        .keyboard-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-width: 600px;
          justify-content: center;
          margin: 30px auto 0;
        }
        .key-btn {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background-color: black;
          border: 2px solid cyan;
          color: cyan;
          font-weight: bold;
          cursor: pointer;
          transition: 0.2s;
        }
        .key-btn:hover:not(:disabled) {
          background-color: cyan;
          color: black;
          border: 2px solid black;
        }
        .key-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
          border-color: #555;
          color: #555;
        }
        .hangman-action-btn {
          padding: 12px 24px;
          border-radius: 30px;
          background-color: black;
          border: 2px solid cyan;
          color: cyan;
          cursor: pointer;
          font-weight: bold;
          transition: 0.2s;
        }
        .hangman-action-btn:hover {
          background-color: cyan;
          color: black;
          border: 2px solid black;
        }
        .hangman-text {
          margin-block-start: 24px;
          text-align: center;
        }
      `}</style>

      <div className="hangman-container">
        <div className="hangman-header">
          <h1>Welcome to Hangman.</h1>
        </div>

        <div className="hangman-drawing">
          {HANGMAN_STAGES[Math.min(mistakes, MAX_MISTAKES)]}
        </div>

        <WordDisplay word={word} guessedLetters={guessedLetters} isLost={isLost} />

        <Keyboard
          guessedLetters={guessedLetters}
          handleGuess={handleGuess}
          disabled={isWon || isLost}
        />

        <div className="hangman-text">
          <GameState isWon={isWon} isLost={isLost} word={word} mistakes={mistakes} />
        </div>

        {(isWon || isLost) && (
          <div className="hangman-text">
            <button className="hangman-action-btn" onClick={resetGame}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

function WordDisplay({
  word,
  guessedLetters,
  isLost,
}: {
  word: string;
  guessedLetters: Set<string>;
  isLost: boolean;
}) {
  return (
    <div className="word-display">
      {word.split("").map((letter, index) => {
        const isRevealed = guessedLetters.has(letter) || isLost;
        return (
          <span
            key={index}
            className="letter-tile"
            style={{ color: !guessedLetters.has(letter) && isLost ? "red" : "cyan" }}
          >
            {isRevealed ? letter : ""}
          </span>
        );
      })}
    </div>
  );
}

function Keyboard({
  guessedLetters,
  handleGuess,
  disabled,
}: {
  guessedLetters: Set<string>;
  handleGuess: (letter: string) => void;
  disabled: boolean;
}) {
  return (
    <div className="keyboard-grid">
      {ALPHABET.map((letter) => (
        <button
          key={letter}
          className="key-btn"
          onClick={() => handleGuess(letter)}
          disabled={disabled || guessedLetters.has(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

function GameState({
  isWon,
  isLost,
  word,
  mistakes,
}: {
  isWon: boolean;
  isLost: boolean;
  word: string;
  mistakes: number;
}) {
  if (isWon) return <div>Congratulations! You saved the hangman!</div>;
  if (isLost) return <div>Game Over! The word was {word}.</div>;
  return <div>Mistakes: {mistakes} / {MAX_MISTAKES}</div>;
}
