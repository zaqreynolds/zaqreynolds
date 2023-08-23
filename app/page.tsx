import Link from "@/node_modules/next/link";

const Home = () => {
  return (
    <main>
      <h1>Zaq Reynolds</h1>
      <Link href="/coding" className="m-10">
        <h2>Coding</h2>
      </Link>
      <Link href="/audio" className="m-10">
        <h2>Audio</h2>
      </Link>
      <Link href="/culinary" className="m-10">
        <h2> Culinary</h2>
      </Link>
    </main>
  );
};
export default Home;
