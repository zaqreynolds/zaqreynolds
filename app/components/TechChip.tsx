const TechChip = ({ tech, small }: { tech: string; small?: boolean }) => {
  return (
    <div
      className={`bg-white bg-opacity-50 text-black p-[2px] px-2 m-1 rounded-xl shadow-md shadow-black`}
    >
      {small ? <div className="w-.5 h-3" /> : tech}
    </div>
  );
};

export default TechChip;
