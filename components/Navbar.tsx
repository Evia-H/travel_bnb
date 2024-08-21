import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4">
      <Link href={"./"}>Home</Link>
      <Link href={"./about"}>About</Link>
      <Link href={"./counter"}>Counter</Link>
    </nav>
  );
}

export default Navbar;
