import PrimaryNav from "../components/PrimaryNav";
import ProjectCard from "./ProjectCard";
import projectData from "./ProjectData";

const Projects = () => {
  return (
    <main className="flex flex-col p-5 z-0 overflow-y-hidden">
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:flex h-full">
          <PrimaryNav />
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="mb-4 text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">
            Projects
          </h1>
          <div className="flex-grow overflow-y-auto px-1">
            {projectData.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                type={project.type}
                description={project.description}
                tech={project.tech}
                destination={project.destination}
                gitHub={project.gitHub}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Projects;
