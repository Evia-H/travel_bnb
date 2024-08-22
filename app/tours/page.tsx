import Link from "next/link";
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
          return (
            <Link
              href={`/tours/${tour.id}`}
              key={tour.id}
              className="hover:text-blue-500"
            >
              <h2>{tour.name}</h2>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default ToursPage;
