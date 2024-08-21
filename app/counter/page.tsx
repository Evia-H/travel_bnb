import Counter from "@/components/Counter";
import React from "react";

function CounterPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl">Counter Page</h1>
      <Counter />
    </div>
  );
}

export default CounterPage;
