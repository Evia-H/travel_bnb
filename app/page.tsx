import { Button } from "@/components/ui/button";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <Button variant="outline" size="lg" className="m-8 capitalize">
        click me
      </Button>
    </div>
  );
}

export default HomePage;
