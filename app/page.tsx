import Link from "@/components/Link";

const Home = () => {
  const navList = ["About", "Work", "Projects", "Contact"];

  return (
    <main className="h-screen w-screen flex flex-col xl:flex-row p-5 lg:justify-between">
      <div className="h-full w-full flex flex-col">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">
          Zaq Reynolds
        </h1>
        <p className="opacity-90">Full-stack web developer</p>
      </div>
      <div className="h-full flex flex-col lg:pr-44 justify-center">
        {navList.map((navItem) => (
          <Link
            title={navItem}
            destination={`/${navItem.toLowerCase()}`}
            key={navItem}
          />
        ))}
      </div>
    </main>
  );
};
export default Home;
