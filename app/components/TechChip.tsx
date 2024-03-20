const TechChip = ({ tech, color }: { tech: string; color?: string }) => {
  //   const colorClass = color ? `bg-${color}` : "bg-grey";

  return (
    <div
      className={`bg-white bg-opacity-50 text-black p-[2px] px-2 m-1 rounded-xl shadow-md shadow-black`}
    >
      {tech}
    </div>
  );
};

export default TechChip;
