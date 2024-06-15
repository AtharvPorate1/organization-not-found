import Allposts from "@/components/Allposts";
import Navbar from "@/components/Navbar";
import { prisma } from "@/utils/db";


const page = async() => {
    const posts = await prisma.project.findMany()

    
    return (
        <div className="min-h-screen bg-gray-100 py-8">
      {posts.map((post) => (
        <Allposts key={post.id} post={post} />
      ))}
    </div>
    );
}

export default page;