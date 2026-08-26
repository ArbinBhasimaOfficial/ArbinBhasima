import { useState, useRef, useMemo } from "react";
import MainLayout from "./components/layout/main-layout";

export default function HooksInReact() {
  // 1. useState
  const [count, setCount] = useState<number>(0);

  // 2. Derived State (Computed during render - NO useEffect needed)
  const log = count > 0 ? `Count changed to: ${count}` : "Component mounted.";

  // 3. useRef (Accessing DOM node - Safe and pure)
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current?.focus(); // Reading/writing ref inside an event handler is safe
  };

  // 4. useMemo (Memoizing expensive calculations)
  const squaredCount = useMemo(() => {
    return count * count;
  }, [count]);

  return (
    <MainLayout>
      <style>{`
        .hooks-container {
          max-width: 700px;
          margin: 0 auto;
          color: white;
        }
        .hook-card {
          border: 2px solid cyan;
          border-radius: 12px;
          padding: 20px;
          background-color: black;
          margin-block-start: 24px;
        }
        .hook-title {
          color: cyan;
          margin-bottom: 12px;
        }
        .hooks-btn {
          padding: 10px 20px;
          border-radius: 30px;
          background-color: black;
          border: 2px solid cyan;
          color: cyan;
          cursor: pointer;
          font-weight: bold;
          transition: 0.2s;
          margin-inline-end: 10px;
        }
        .hooks-btn:hover {
          background-color: cyan;
          color: black;
          border: 2px solid black;
        }
        .code-snippet {
          background-color: #111;
          color: #00ffff;
          padding: 10px;
          border-radius: 6px;
          font-family: monospace;
          margin: 10px 0;
        }
        .hooks-input {
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid cyan;
          background: black;
          color: cyan;
          margin-inline-end: 10px;
        }
      `}</style>

      <div className="hooks-container">
        <h1>React Hooks Guide</h1>
        <p>
          Hooks are functions starting with <code>use</code> that let you hook into React state and lifecycle features from function components.
        </p>

        {/* 1. useState */}
        <div className="hook-card">
          <h2 className="hook-title">1. useState</h2>
          <p>Manages local component state.</p>
          <div className="code-snippet">Current Count: {count}</div>
          <button className="hooks-btn" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="hooks-btn" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        {/* 2. Derived State */}
        <div className="hook-card">
          <h2 className="hook-title">2. Derived Values</h2>
          <p>Calculated directly in render body—avoids cascading renders from <code>useEffect</code>.</p>
          <div className="code-snippet">Derived Log: {log}</div>
        </div>

        {/* 3. useRef */}
        <div className="hook-card">
          <h2 className="hook-title">3. useRef (DOM Access)</h2>
          <p>Holds mutable values or direct references to DOM nodes without re-rendering.</p>
          <div style={{ marginTop: "10px" }}>
            <input ref={inputRef} type="text" className="hooks-input" placeholder="Click button to focus..." />
            <button className="hooks-btn" onClick={handleFocus}>Focus Input</button>
          </div>
        </div>

        {/* 4. useMemo */}
        <div className="hook-card">
          <h2 className="hook-title">4. useMemo</h2>
          <p>Memoizes calculations between renders to prevent unnecessary re-computations.</p>
          <div className="code-snippet">
            {count}² = {squaredCount}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
