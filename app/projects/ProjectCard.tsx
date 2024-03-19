import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

type ProjectType = "fullstack" | "frontend" | "backend";

const ProjectCard = ({
  title = "Project Title",
  type,
  description = "Project Description",
  techStack = [
    "Technology 1",
    "Technology 2",
    "Technology 3",
    "Technology 4",
    "Technology 5",
  ],
  destination = "",
}: {
  title: string;
  type: ProjectType;
  description: string;
  techStack: string[];
  destination: string;
}) => {
  return (
    <div className="mb-3 border border-lightOlive border-opacity-70 rounded p-2 shadow-md shadow-black hover:border-opacity-100 hover:bg-hover hover:shadow-lg hover:mb-6 transition-all duration-500">
      <h2 className="text-3xl">{title}</h2>
      <p> Type</p>
      <h3 className="text-2xl">{description}</h3>
      <h4 className="text-lg">Project Technologies:</h4>
      <ul className="flex flex-wrap">
        {techStack.map((tech, index) => (
          <li key={index} className="p-1, mr-1">
            {tech}
          </li>
        ))}
      </ul>
      {/* <button className="bg-lightOlive text-black font-bold w-30 my-2 py-2 px-4 mt-4 rounded hover:bg-blue-200">
        Check it out
      </button> */}
      <Link
        href={destination}
        className="bg-lightOlive text-black flex items-center w-fit my-2 py-2 px-4 mt-4 rounded hover:bg-blue-200"
      >
        Check it out
        <ExternalLinkIcon width="20" height="20" className="ml-2" />
      </Link>
    </div>
  );
};

export default ProjectCard;
