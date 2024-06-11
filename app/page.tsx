import Image from "next/image";
import { prisma } from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import Welcome from "@/components/Welcome";
import {
  
  SignInButton,
  
  SignedOut,
  
} from '@clerk/nextjs'
import {redirect} from "next/navigation";


const createUserOnDB = async ()=>{
  const user = await currentUser();
  console.log(user);
  console.log("clerkId : ", user?.id);

  const match = await prisma.user.findUnique({
      where: {
          clerkId: user?.id as string
      }
  });
  if (match) console.log('User already exists');

  if(!match){
      await prisma.user.create({
          data: {
              clerkId: user?.id as string,
              email: user?.emailAddresses[0].emailAddress as string,
            
  } 
      });
  }
 

}




export default async function Home() {

  const { userId } = auth();

  if (userId) {
    console.log("userId", userId);
    await createUserOnDB();
    console.log("User created")

    redirect("/dashboard");
    
   
  }

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {userId ? <Welcome /> : <SignedOut>
          <SignInButton />
        </SignedOut>}
      
    </main>
  );
}
