import { useState, useEffect } from "react";
import MainLayout from "./components/layout/main-layout";

function AutomaticCounter() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // 1. Start interval when component mounts
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // 2. Clean up interval when component unmounts
    return () => clearInterval(timer);
    // dependency array must not contain any variables it is anti pattern
  }, []); // Empty array ensures timer sets up only once

  return (
    <MainLayout>
      <div>
        <p>Count: {count}</p>
      </div>
    </MainLayout>
  );
}

export default AutomaticCounter;
