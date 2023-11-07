import Link from "@/node_modules/next/link";
const Coding = () => {
  return (
    <main className={`text-center`}>
      <h1>Web Developer</h1>
      <div className="flex flex-col justify-start text-left">
        <h2>Portfolio</h2>
        <Link href="https://redditcrawler.netlify.app/" target="_blank">
          Reddit Crawler
        </Link>
        <p>
          A front-end only React app using MUI. Reddit Crawler fetches data from
          the Reddit API upon loading. The user can search and sort data from
          the API as well.
        </p>
        <h2>Skills</h2>
      </div>
    </main>
  );
};

export default Coding;
