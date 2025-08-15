import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton, useUser, SignInButton } from "@clerk/clerk-react";

function Navbar() {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="h-9 invert opacity-80" />
      </Link>
      <div>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : isSignedIn ? (
          <UserButton />
        ) : (
          <SignInButton>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Sign In
            </button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default Navbar;
