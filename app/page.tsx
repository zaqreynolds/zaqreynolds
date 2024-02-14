import PrimaryNav from "@/components/PrimaryNav";

const Home = () => {
  return (
    <main className="h-screen w-screen flex flex-col xl:flex-row p-5 lg:justify-between">
      <div className="h-full w-full flex flex-col">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">
          Zaq Reynolds
        </h1>
        <p className="opacity-90">Full-stack web developer</p>
      </div>
      <PrimaryNav />
    </main>
  );
};
export default Home;
