import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import Welcome from "@/components/Welcome";
import {
  
  SignInButton,
  
  SignedOut,
  
} from '@clerk/nextjs'


export default function Home() {

  const { userId } = auth();

  if (userId) {
    console.log("userId", userId);
  }

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {userId ? <Welcome /> : <SignedOut>
          <SignInButton />
        </SignedOut>}
      
    </main>
  );
}
