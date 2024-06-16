// components/Navbar.js

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { currentUser } from '@clerk/nextjs/server';



const Navbar = async() => {
  const user = await currentUser();
  return (
    <nav className="flex flex-row space-x-10 p-5">
      <div className=" flex text-2xl text-center font-semibold text-black space-x-7">
        {/* Logo Container */}
        <Link
        href={'/dashboard'}
        >
        <div>
             LOGO
        </div>
        </Link>
        <div>
          <Link 
          href={"/profile/"+ user?.id}
          >
          account
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Search Projects" />
            <Button type="submit">Search</Button>
        </div>

        {/* Account Section */}
        <div className="flex flex-row space-x-2">
          
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
            <ModeToggle/>
            
          <UserButton />
        </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
