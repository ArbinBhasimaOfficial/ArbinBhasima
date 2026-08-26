import React, { useState } from "react";
import MainLayout from "./components/layout/main-layout";

function mockingAPICall(userName: string, delay: number): Promise<{ userName: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userName });
    }, delay);
  });
}

export default function StaleClosure() {
  const [data, setData] = useState<string>("None");
  const [loadingUser, setLoadingUser] = useState<string | null>(null);

  // Track the latest click timestamp/request ID
  const latestRequestId = React.useRef(0);

  const handleFetch = async (userName: string, delay: number) => {
    // 1. Generate a unique ID for this request click
    const requestId = ++latestRequestId.current;
    setLoadingUser(userName);

    // 2. Call the mock API
    const response = await mockingAPICall(userName, delay);

    // 3. Race Condition Guard: Only update state if this request is STILL the latest one
    if (requestId === latestRequestId.current) {
      setData(response.userName);
      setLoadingUser(null);
    }
  };

  return (
    <MainLayout>
      <style>{`
        .stale-container {
          max-width: 600px;
          margin: 0 auto;
          color: white;
        }
        .stale-card {
          border: 2px solid cyan;
          border-radius: 12px;
          padding: 24px;
          background-color: black;
          margin-block-start: 24px;
        }
        .btn-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        .stale-btn {
          padding: 10px 16px;
          border-radius: 20px;
          background-color: black;
          border: 2px solid cyan;
          color: cyan;
          cursor: pointer;
          font-weight: bold;
          transition: 0.2s;
        }
        .stale-btn:hover {
          background-color: cyan;
          color: black;
          border: 2px solid black;
        }
        .display-box {
          background-color: #111;
          color: #00ffff;
          padding: 12px;
          border-radius: 6px;
          font-family: monospace;
          margin-block: 16px;
          font-size: 1.2rem;
        }
      `}</style>

      <div className="stale-container">
        <h1>Async Race Conditions & Stale State</h1>

        <div className="stale-card">
          <div>
            Status: {loadingUser ? `Fetching ${loadingUser}...` : "Idle"}
          </div>
          <div className="display-box">Fetched data: {data}</div>

          <p>
            Try clicking <strong>Miku (3000ms delay)</strong> and then immediately click <strong>Tanaka (500ms delay)</strong>.
          </p>

          <div className="btn-group">
            {/* Slow response */}
            <button className="stale-btn" onClick={() => handleFetch("Miku", 3000)}>
              Fetch Miku (Slow - 3s)
            </button>

            {/* Fast response */}
            <button className="stale-btn" onClick={() => handleFetch("Tanaka", 500)}>
              Fetch Tanaka (Fast - 0.5s)
            </button>

            <button className="stale-btn" onClick={() => handleFetch("Tawapon", 1500)}>
              Fetch Tawapon (1.5s)
            </button>

            <button className="stale-btn" onClick={() => handleFetch("Karina", 1000)}>
              Fetch Karina (1s)
            </button>

            <button className="stale-btn" onClick={() => handleFetch("Santosu", 800)}>
              Fetch Santosu (0.8s)
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
