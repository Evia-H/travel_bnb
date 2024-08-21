import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link
        href={"./about"}
        className="text-blue-300 text-xl inline-block mt-8"
      >
        About page
      </Link>
    </div>
  );
}

export default HomePage;
