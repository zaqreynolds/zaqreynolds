import Header from "@/app/components/Header";
import AboutBody from "./AboutBody";

const About = () => {
  return (
    <main className="flex flex-col p-5 z-0 overflow-y-auto">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">About</h1>
      <AboutBody />
    </main>
  );
};
export default About;
