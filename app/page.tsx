import Image from "next/image";
import { prisma } from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import Welcome from "@/components/Welcome";
import { SignInButton, SignedOut } from '@clerk/nextjs';
import { redirect } from "next/navigation";

const createUserOnDB = async () => {
  const user = await currentUser();
  console.log(user);
  console.log("clerkId : ", user?.id);

  if (!user) return;

  // Check if user already exists by clerkId or email
  const matchById = await prisma.user.findUnique({
    where: {
      clerkId: user.id
    }
  });

  const matchByEmail = await prisma.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress
    }
  });

  if (matchById) {
    console.log('User already exists with this clerkId');
    return;
  }

  if (matchByEmail) {
    console.log('User already exists with this email');
    return;
  }

  await prisma.user.create({
    data: {
      clerkId: user.id,
      email: user.emailAddresses[0].emailAddress
    }
  });
  console.log("User created");
};

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    console.log("userId", userId);
    await createUserOnDB();
    redirect("/dashboard");
    return null; // Required to stop rendering further as redirect will handle navigation
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {userId ? <Welcome /> : (
        <SignedOut>
          <SignInButton />
        </SignedOut>
      )}
    </main>
  );
}
  