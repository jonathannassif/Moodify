import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    let id;
    if (running && timeLeft > 0) {
      id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (timeLeft === 0 && running) {
      alert("Time's up!");
      setRunning(false);
    }
    return () => clearInterval(id);
  }, [running, timeLeft]);

  const start = () => {
    const mins = parseInt(inputRef.current.value, 10);
    if (!isNaN(mins) && mins > 0) {
      setTimeLeft(mins * 60);
      setRunning(true);
    }
  };

  const stop = () => setRunning(false);

  const mins = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[80vh] text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-6">Focus Timer</h2>

      <input
        ref={inputRef}
        type="number"
        min="1"
        placeholder="Minutes"
        className="w-32 border rounded px-3 py-2 mb-4 text-center"
        disabled={running}
      />

      <div className="text-5xl font-mono mb-6">
        {mins}:{secs}
      </div>

      <div className="space-x-4">
        <button
          onClick={start}
          disabled={running}
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Stop
        </button>
      </div>
    </motion.div>
  );
}