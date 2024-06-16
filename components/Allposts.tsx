import { prisma } from "@/utils/db";
import Link from "next/link";


interface Post {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string;
    creatorId: string;
    status: string;
    likes: number;
    url: string;
  }
  



const Allposts = async ({post}) => {





    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="text-lg font-bold">{post.name}</div>
        <div className="ml-auto text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
      </div>
      <p className="text-gray-700 mb-2">{post.description}</p>
      <div className="flex items-center justify-between">
        <Link
          href={"/projects/" + post.id}
          
          
          className="text-blue-500 hover:underline"
        >
          Visit
        </Link>
        <div className="text-sm text-gray-500">
          {post.likes} {post.likes === 1 ? 'like' : 'likes'}
        </div>
      </div>
    </div>
    );
}

export default Allposts;