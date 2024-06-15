import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./db";


export const getUser = async()=>{
    const user = await currentUser()
    return user
}


interface ProjectData {
    name: string;
    description: string;
    creatorId: string;
    status: string;
    url?: string;
  }
  
  export async function createProject(data: ProjectData) {
    try {
      const newProject = await prisma.project.create({
        data: {
          name: data.name,
          description: data.description,
          creatorId: data.creatorId,
          status: data.status,
          url: data.url,
        },
      });
      return newProject;
    } catch (error) {
      console.error('Error creating project:', error);
      throw new Error('Failed to create project');
    }
  }