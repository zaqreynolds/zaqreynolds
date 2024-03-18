type ProjectType = "fullstack" | "frontend" | "backend";

const ProjectCard = ({
  title = "Project Title",
  type,
  description = "Project Description",
  techStack = ["Technology 1", "Technology 2", "Technology 3"],
}: {
  title: string;
  type: ProjectType;
  description: string;
  techStack: string[];
}) => {
  return (
    <div className="mb-3 border border-lightOlive border-opacity-70 rounded p-2 shadow-md shadow-black hover:border-opacity-100 hover:bg-hover hover:shadow-lg hover:mb-6 transition-all duration-500">
      <h2 className="text-3xl">{title}</h2>
      <p> Type</p>
      <h3 className="text-2xl">{description}</h3>
      <h4 className="text-lg">Project Technologies</h4>
      <ul className="flex">
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
        ;
      </ul>
      <button className="bg-lightOlive text-black font-bold w-30 my-2 py-2 px-4 mt-4 rounded hover:bg-blue-200">
        Check it out
      </button>
    </div>
  );
};

export default ProjectCard;
