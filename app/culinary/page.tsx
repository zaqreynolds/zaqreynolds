import Link from "@/node_modules/next/link";
const Culinary = () => {
  return (
    <main className="text-center">
      <div className="flex justify-start">
        <Link href="/">Home</Link>
      </div>
      <h1>Culinary</h1>
      <h3>Coming soon!</h3>
      <p>
        Please pardon our dust. This page is under construction. <br />
        Check back later for more content and functionality
      </p>
    </main>
  );
};

export default Culinary;
