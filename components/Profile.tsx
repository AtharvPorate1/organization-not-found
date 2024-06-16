import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";





const Profile = async() => {
    const user = await currentUser();
    console.log(user)
    const prismaUser = await prisma.user.findUnique({
        where: {
        email: user?.emailAddresses[0].emailAddress
        }
      });
      console.log(prismaUser)
    // const socialLinks = [
    //     {
    //     platform: "Twitter",
    //     url: user?.metadata?.twitter,
    //     },
    //     {
    //     platform: "LinkedIn",
    //     url: user?.metadata?.linkedin,
    //     },
    //     {
    //     platform: "GitHub",
    //     url: user?.metadata?.github,
    //     },]
    return (
        <div>
            <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center mb-4">
        <Image
        
          src={user?.imageUrl || "/avatar.png"}
          alt={`{}'s avatar`}
          className="w-16 h-16 rounded-full mr-4"
          width={800}
          height={800}
        />
        <div>
          <div className="text-lg font-bold">{user?.username}</div>
          <div className="text-sm text-gray-500">{user?.emailAddresses[0].emailAddress}</div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-md font-bold">Bio</h2>
        <p className="text-gray-700">{prismaUser?.Bio}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-md font-bold">Resume</h2>
        {prismaUser?.Resume ? (
          <a
            href={prismaUser.Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Resume
          </a>
        ) : (
          <p className="text-gray-700">No resume available</p>
        )}
      </div>
      <div className="mb-4">
        <h2 className="text-md font-bold">Social Links</h2>
        <ul>
          {/* {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {social.platform}
              </a>
            </li>
          ))} */}
        </ul>
      </div>
      <div className="text-sm text-gray-500">
        {/* Joined on {new Date(user.createdAt).toLocaleDateString()} */}
      </div>
    </div>

        </div>
    );
}

export default Profile;