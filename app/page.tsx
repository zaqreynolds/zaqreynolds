import Link from "@/node_modules/next/link";

const Home = () => {
  return (
    <main>
      <h1>Zaq Reynolds</h1>
      <Link href="/coding" className="m-10">
        Coding
      </Link>
      <Link href="/audio" className="m-10">
        Audio
      </Link>
      <Link href="/culinary" className="m-10">
        Culinary
      </Link>
    </main>
  );
};
export default Home;
