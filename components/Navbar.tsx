// components/Navbar.js

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';



const Navbar = () => {
  return (
    <nav className="flex flex-row space-x-6">
      <div className=" flex text-2xl text-center font-semibold text-black">
        {/* Logo Container */}
        <div>
             LOGO
        </div>

        {/* Search Bar */}
        <div className="">
          
        </div>

        {/* Account Section */}
        <div className="">
          
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
