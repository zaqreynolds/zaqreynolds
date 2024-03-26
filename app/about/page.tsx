import Header from "@/app/components/Header";
import AboutBody from "./AboutBody";
import PrimaryNav from "../components/PrimaryNav";

const About = () => {
  return (
    <main className="flex flex-col p-5 z-0 overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:flex h-full">
          <PrimaryNav />
        </div>
        <div className="flex flex-col flex-1 md:mr-8 md:mt-4 overflow-hidden">
          <h1 className="mb-4 text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">
            About
          </h1>
          <div className="flex-grow overflow-y-auto">
            <AboutBody />
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
