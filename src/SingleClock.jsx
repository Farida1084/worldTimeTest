import { useEffect, useState } from "react";
//import { timeZones } from "./timeZones";

export default function SingleClock(city, timeZone) {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocateTimeString("sv-SE", { timeZone }));
    }, 1000);
  }, []);
  return (
    <div className="flex md:flex-col justify-between md:items-start p-6 bg-slate-200 rounded-md w-full ">
      <div className="text-xl text-gray-600">{city}</div>
      <div className="text-4xl text-gray-900 font-semibold font-mono">
        {time}
      </div>
      <div className="text-gray-600 underline hover:text-gray-400">bigger</div>
    </div>
  );
}
