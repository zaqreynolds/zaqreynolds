import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <main className="flex flex-col p-5 z-0 w-full overflow-y-auto">
      <h1 className="mb-4 text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">
        Projects
      </h1>
      <div className="flex flex-col ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
};
export default Projects;
