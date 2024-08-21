import React from "react";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const url = "http://localhost:3000/api/tours";

async function ToursPage() {
  const response = await fetch(url);
  const data: Tour[] = await response.json();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl">ToursPage</h1>
      <section>
        {data.map((tour) => {
          return <h2 key={tour.id}>{tour.name}</h2>;
        })}
      </section>
    </div>
  );
}

export default ToursPage;
