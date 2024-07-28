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
      <p>Time left: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default CountdownTimer;
// import React, { useState, useEffect } from "react";

// const getNextMidnightTimestamp = () => {
//   const now = new Date();
//   const nextMidnight = new Date(now);
//   nextMidnight.setHours(24, 0, 0, 0); // Set to the next midnight
//   return nextMidnight.getTime(); // Return timestamp in milliseconds
// };

// const CountdownTimer = ({ endTime }) => {
//   const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

//   useEffect(() => {
//     const updateTimer = () => {
//       const currentTime = Date.now();
//       if (currentTime >= endTime) {
//         // If the current time is past the end time, reset to the next day's midnight
//         setTimeLeft(getNextMidnightTimestamp() - currentTime);
//       } else {
//         setTimeLeft(endTime - currentTime);
//       }
//     };

//     updateTimer(); // Initial update
//     const interval = setInterval(updateTimer, 1000); // Update every second

//     return () => clearInterval(interval);
//   }, [endTime]);

//   const formatTime = (milliseconds) => {
//     const totalSeconds = Math.floor(milliseconds / 1000);
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     return `${hours}h ${minutes}m ${seconds}s`;
//   };

//   return (
//     <div>
//       <p>
//         Осталось времени:{" "}
//         {timeLeft > 0 ? formatTime(timeLeft) : "Время истекло!"}
//       </p>
//     </div>
//   );
// };

// export default CountdownTimer;
