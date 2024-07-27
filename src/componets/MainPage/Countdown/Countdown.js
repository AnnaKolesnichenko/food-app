import React, { useState, useEffect } from "react";

const CountdownTimer = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, endTime - Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <p>Осталось времени: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default CountdownTimer;
