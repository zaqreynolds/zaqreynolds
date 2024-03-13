import PrimaryNav from "@/app/components/PrimaryNav";

const Home = () => {
  return (
    <main className="grow flex flex-col p-5 xl:flex-row lg:justify-between">
      <div className="h-full w-full flex flex-col">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl pb-2">
          Zaq Reynolds
        </h1>
        <p className="opacity-80">Full-stack web developer</p>
      </div>
      <PrimaryNav />
    </main>
  );
};
export default Home;
