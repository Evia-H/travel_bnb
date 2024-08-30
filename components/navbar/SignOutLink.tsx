"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "../ui/use-toast";

function SignOutLink() {
  const handleSignOut = () => {
    toast({ description: "You've been signed out successfully!" });
  };

  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleSignOut} className="w-full text-left">
        Sign Out
      </button>
    </SignOutButton>
  );
}
export default SignOutLink;
