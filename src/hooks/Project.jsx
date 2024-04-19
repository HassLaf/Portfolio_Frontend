import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"


const Project = ({projectID,title,shortDescription,description,period,thumbnail,ImagesList,Tags,createdAt}) => {
  let hero = "https://via.placeholder.com/150"
  if (thumbnail) {
    hero = thumbnail;
  }
  return (
  //   <Link to={`/Project/${projectID}`} className="project"> {/* Remove 'flex' class */}
  // <Card className="flex flex-col justify-between w-[500px]"> {/* Add 'flex' class, and 'flex-col justify-between' classes */}
  //   <CardContent> {/* Remove 'flex-1' class */}
  //     <div className="flex"> {/* Add 'flex' class */}
  //       <img src={hero} alt="Project Hero" className="w-32 h-32 mr-4" /> {/* Adjust width and height as needed */}
  //       <div>
  //         <CardHeader>
  //           <CardTitle>{title}</CardTitle>
  //           <CardDescription>{shortDescription}</CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <p>{description}</p>
  //         </CardContent>
  //       </div>
  //     </div>
  //     <CardFooter>
  //       <p>{createdAt}</p>
  //     </CardFooter>
  //   </CardContent>
  // </Card>

  <ResizablePanelGroup direction="horizontal">
      <ResizablePanel  className="max-w-md rounded-lg border "> <img src="https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg" alt="Project Hero" className="h-auto max-w-full" /> {/* Adjust width and height as needed */}</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="flex h-full items-center justify-center p-6">
      <Card className="flex-1 bg-lightblue-400 text-center text-xl"> {/* Add 'flex' class, and 'flex-col justify-between' classes */}
    <CardContent> {/* Remove 'flex-1' class */}
          <CardHeader>
            <CardTitle className="text-5xl font-extrabold dark:text-white">{title}</CardTitle>
            <CardDescription>{shortDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{description}</p>
          </CardContent>
      <CardFooter>
        <p>{createdAt}</p>
      </CardFooter>
    </CardContent>
  </Card>
      </ResizablePanel>
    </ResizablePanelGroup>
// </Link>


  

    );
  };
export default Project;

