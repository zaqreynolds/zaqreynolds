import ProjectCard from "./ProjectCard";

const toDoDescription =
  "A full stack todo app that uses Clerk for authentication, TanStack Query for data fetching, and DnD Kit for drag and drop functionality. The front end is built with React and Material UI, and the back end is built with Node.js and Express.js.";

const redditCrawlerDescription =
  "A front end project that uses the Reddit API to fetch data and display it in two clean and efficient ways using React and Material UI.  More details, comments, replies etc. are avaible for each post.";

const zaqReynoldsDescription =
  "The website you are currently on! A full stack project built with Next.js, and TypeScript. ";

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
          description={toDoDescription}
          techStack={[
            "JavaScript",
            "React",
            "MUI",
            "TanStack Query",
            "Clerk",
            "DnD Kit",
            "HTML",
            "CSS",
            "TypeScript",
            "Node.js",
            "Express.js",
          ]}
          destination=""
        />
        <ProjectCard
          title="Reddit Crawler"
          type="front"
          description={redditCrawlerDescription}
          techStack={["JavaScript", "React", "MUI", "HTML", "CSS"]}
          destination=""
        />
        <ProjectCard
          title="Zaq Reynolds"
          type="full"
          description={zaqReynoldsDescription}
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
