import React, { useEffect, useState } from "react";
import "./App.css";
import "./FallingExclamations";

interface Exclamation {
  id: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

function Exclamations() {
  const [exclamations, setExclamations] = useState<Exclamation[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = crypto.randomUUID();
      const left = Math.random() * 100;
      const size = Math.random() * 1.5 + 0.5;
      const duration = Math.random() * 3 + 3;
      const delay = Math.random() * 2;

      setExclamations((prev) => [...prev, { id, left, size, duration, delay }]);

      setTimeout(() => {
        setExclamations((prev) => prev.filter((e) => e.id !== id));
      }, (duration + delay) * 1000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {exclamations.map((e) => (
        <span
          key={e.id}
          className="absolute text-yellow-400 font-bold animate-fall select-none"
          style={{
            left: `${e.left}%`,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            fontSize: `${e.size}rem`,
          }}
        >
          !!!!!!!! shit
        </span>
      ))}
    </div>
  );
}

export default Exclamations;

