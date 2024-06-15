import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createProject, getUser } from "@/utils/helper";

const handleSubmit = async (formData: FormData) => {
  "use server";

  const user = await getUser();
  if (!user) {
    console.error("User not found");
    return;
  }

  const projectData = {
    name: formData.get("name") as string || "default name",
    description: formData.get("description") as string,
    status: formData.get("status") as string,
    url: formData.get("url") as string || undefined,
    creatorId: user.id,
  };

  try {
    const newProject = await createProject(projectData);
    console.log("Project created successfully:", newProject);
  } catch (error) {
    console.error("Error creating project:", error);
  }
};

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-9/12 max-w-5xl p-8 bg-white rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-center">Create New Project</h2>
        <form action={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <Input
              type="text"
              placeholder="Enter project name"
              name="name"
              defaultValue=""
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <Textarea
              placeholder="Enter project description"
              name="description"
              defaultValue=""
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Status</label>
            <Input
              type="text"
              placeholder="Enter project status"
              name="status"
              defaultValue=""
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">URL</label>
            <Input
              type="url"
              placeholder="Enter project URL"
              name="url"
              defaultValue=""
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Create Project</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
