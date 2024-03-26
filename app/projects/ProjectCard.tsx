import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import TechChip from "../components/TechChip";

type Project = {
  title: string;
  type: string;
  description: string;
  tech: string[];
  destination: string;
};

const ProjectCard = (project: Project) => {
  const handleType = ({ project }: { project: { type: string } }) => {
    switch (project.type) {
      case "full":
        return "Fullstack";
      case "front":
        return "Frontend";
      case "back":
        return "Backend";
      default:
        return "Fullstack";
    }
  };

  return (
    <div className="mb-3 border border-lightOlive border-opacity-70 rounded shadow-md shadow-black hover:border-opacity-100 hover:bg-hover hover:shadow-lg hover:mb-6 transition-all duration-500">
      <div className="flex flex-col p-1 bg-lightOlive bg-opacity-80">
        <h2 className=" text-3xl text-background ">{project.title}</h2>
        <p className="text-background text-sm">{handleType({ project })}</p>
      </div>
      <div className="flex flex-col p-2">
        <h3 className="text-xl pb-1 border-b-2 border-lightOlive border-opacity-40">
          {project.description}
        </h3>
        <h4 className="text-lg pt-1">Project Technologies:</h4>
        <ul className="flex flex-wrap">
          {project.tech.map((tech, index) => (
            <li key={index} className="p-1, mr-1">
              <TechChip tech={tech} />
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Link
            href={project.destination}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lightOlive bg-opacity-80 text-black flex items-center w-fit my-2 py-2 px-4 mt-4 rounded hover:bg-opacity-100  "
          >
            Check it out
            <ExternalLinkIcon width="20" height="20" className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
