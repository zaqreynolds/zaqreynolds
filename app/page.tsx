const Home = () => {
  return (
    <main className="h-screen w-screen flex p-5 justify-between">
      <div className="h-full w-full flex flex-col">
        <h1 className="text-9xl">Zaq Reynolds</h1>
        <p>Full-stack web developer</p>
      </div>
      <div className="h-full flex flex-col pr-44 justify-center">
        <h2 className="text-7xl mb-10">About</h2>
        <h2 className="text-7xl mb-10">Work</h2>
        <h2 className="text-7xl mb-10">Projects</h2>
        <h2 className="text-7xl mb-10">Contact</h2>
      </div>
    </main>
  );
};
export default Home;
