import Link from "next/link";


const Welcome = () => {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-4xl font-bold">The Main Page</h1>
        {/* <p className="text-2xl font-bold">Welcome to the main page.</p> */}

        
      <Link href="/dashboard">
          <button className="text-2xl">
            Move to dashboard
          </button>
    </Link>
    </main>
    );
}

export default Welcome;