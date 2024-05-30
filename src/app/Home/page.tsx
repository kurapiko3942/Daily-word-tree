"use client";
import { useEffect, useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const addNumber = () => {
    setCount(count + 1);
  };

  const minusNumber = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("Hello World");
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center p-10 m-6">
      <h1 className="text-7xl font-bold">カウンターアプリ</h1>
      <div className="flex m-10">
        <button onClick={addNumber} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
          ＋
        </button>
        <button onClick={minusNumber} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3">
          ー
        </button>
      </div>
      <h3>{count} 回クリックされました！</h3>
    </main>
  );
};

export default CounterApp;
