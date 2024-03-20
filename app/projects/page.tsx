import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <main className="flex flex-col p-5 z-0 w-full overflow-y-auto">
      <h1 className="mb-4 text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">
        Projects
      </h1>
      <div className="flex flex-col ">
        <ProjectCard
          title="ToDo"
          type="full"
          description="more on this later"
          techStack={[
            "Javascript",
            "React",
            "MUI",
            "TanStack Query",
            "Clerk",
            "DnD Kit",
            "HTML",
            "CSS",
            "Typescript",
            "Node.js",
            "Express.js",
          ]}
          destination=""
        />
        <ProjectCard
          title="Reddit Crawler"
          type="front"
          description="more on this later"
          techStack={["Javascript", "React", "MUI", "HTML", "CSS"]}
          destination=""
        />
        <ProjectCard
          title="Zaq Reynolds"
          type="full"
          description="more on this later"
          techStack={[
            "Next.js",
            "React",
            "TypeScript",
            "TailwindCSS",
            "Shadcn/ui",
            "React-Hook-Form",
            "Zod",
            "Radix-UI",
            "HTML",
          ]}
          destination=""
        />
      </div>
    </main>
  );
};
export default Projects;
