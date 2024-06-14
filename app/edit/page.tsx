import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentUser } from "@clerk/nextjs/server";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const ProfileEditPage = async () => {
  const user = await currentUser();
  console.log(user);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
        <form className="space-y-4">
          <div className="flex justify-center mb-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
              <AvatarFallback>{user ? user?.firstName?.charAt(0) : 'U'}</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <label className="block text-gray-700">Username</label>
            <Input type="text" placeholder="Enter new username" />
          </div>
          <div>
            <label className="block text-gray-700">Avatar URL</label>
            <Input type="text" placeholder="Enter avatar URL" />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditPage;
