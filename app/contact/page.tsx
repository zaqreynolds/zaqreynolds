import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import Image from "next/image";

const Contact = () => {
  return (
    <main className="flex flex-col p-5 z-0 overflow-y-auto w-full">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">Contact</h1>
      <div className="w-full flex  justify-around">
        <GitHubIcon />
        <LinkedInIcon />
      </div>
    </main>
  );
};
export default Contact;
