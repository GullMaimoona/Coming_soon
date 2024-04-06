'use client'
import { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ countdown: ["00", "00", "00", "00"], units: ["Days", "Hours", "Minutes", "Seconds"] });

  useEffect(() => {
    const countDownDate = new Date("April 11, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        // Handle the expired state here. 
        setTimeLeft({ countdown: ["EXPIRED", "EXPIRED", "EXPIRED", "EXPIRED"], units: ["", "", "", ""] });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const countdown = [
        days < 10 ? `0${days}` : `${days}`,
        hours < 10 ? `0${hours}` : `${hours}`,
        minutes < 10 ? `0${minutes}` : `${minutes}`,
        seconds < 10 ? `0${seconds}` : `${seconds}`,
      ];

      setTimeLeft({ countdown, units: ["Days", "Hours", "Minutes", "Seconds"] });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white flex -mt-10">
      {timeLeft.countdown.map((value, index) => (
        <div key={index} className="flex flex-col items-center mr-10">
          <div className="number text-5xl font-semibold">{value}</div>
          <div className="unit text-sm">{timeLeft.units[index]}</div>
        </div>
      ))}
    </div>
  );
}
