"use client";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import TechChip from "../components/TechChip";
import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type Project = {
  title: string;
  type: string;
  description: string;
  tech: string[];
  destination: string;
  gitHub: string[];
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

  const [isOpen, setOpen] = useState(true);

  const handleDescription = () =>
    isOpen
      ? project.description
      : project.description.substring(0, 100) + "...";

  return (
    <div
      className={`mb-3 border border-lightOlive border-opacity-70 rounded shadow-md md:w-5/6 shadow-black hover:border-opacity-100 hover:bg-hover hover:shadow-lg hover:mb-6 transition-all duration-500 overflow-hidden ${
        isOpen ? "max-h-full" : "max-h-50"
      }`}
    >
      <div className="flex p-1 bg-lightOlive bg-opacity-80 justify-between">
        <div>
          <h2 className=" text-3xl text-background ">{project.title}</h2>
          <p className="text-background text-sm">{handleType({ project })}</p>
        </div>

        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          <ChevronDownIcon
            width="30"
            height="30"
            className={`text-black transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div className="flex flex-col p-2">
        <h3 className="text-xl pb-1 border-b-2 border-lightOlive border-opacity-40">
          {handleDescription()}
        </h3>
        <h4 className="text-lg pt-1">Project Technologies:</h4>
        <ul className="flex flex-wrap">
          {project.tech.map((tech, index) => (
            <li key={index} className="p-1, mr-1">
              <TechChip tech={tech} small={!isOpen} />
            </li>
          ))}
        </ul>
        {isOpen && (
          <div className="flex justify-center mt-4 mb-2">
            <div className="grow-2" />
            <Link
              href={project.destination}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lightOlive bg-opacity-80 text-black flex items-center w-fit py-2 px-4 rounded hover:bg-opacity-100  "
            >
              Check it out
              <ExternalLinkIcon width="20" height="20" className="ml-2" />
            </Link>
            <div className="grow" />

            <div className="w-20 flex">
              {project.gitHub?.map((link, index) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className={`flex items-center border-lightOlive border rounded opacity-80 hover:opacity-100 ${
                    project.gitHub.length > 1 ? "mx-2" : ""
                  }`}
                >
                  <GitHubLogoIcon width="30" height="30" className="m-1" />
                </Link>
              ))}
            </div>
            <div className="grow-2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
