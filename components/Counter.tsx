"use client";

import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="flex  gap-x-6 text-white px-4 py-2 mt-4 ">
      <button
        className="bg-blue-500 rounded w-[100px]"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <h2 className="text-5xl font-bold text-black">{counter}</h2>
      <button
        className="bg-blue-500 rounded w-[100px]"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
