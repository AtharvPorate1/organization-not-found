"use client"
import { prisma } from "@/utils/db";
import { usePathname } from 'next/navigation'

const GetPathname = () => {
    const path = usePathname()
    console.log(path)
    return path
}
function getPathname(url: string): string {
    const prefix = '/projects/';
    if (url.startsWith(prefix)) {
      return url.replace(prefix, '');
    }
    throw new Error(`URL must start with ${prefix}`);
  }





const page = async() => {
   const path = GetPathname()
   const pathname = getPathname(path);

   console.log("The path is",pathname)
    const project = await prisma.project.findUnique({
        where:{
            id : pathname,
        }

    })
    console.log(project)



    return (
        <div>
            <h1>Project Page</h1>
        </div>
    );
}

export default page;