import Image from "next/image";
// import github from "../components/svgs/github.svg";

const Contact = () => {
  return (
    <main className="flex flex-col p-5 z-0 overflow-y-auto">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">Contact</h1>
      <div className="flex justify-between">
        <div className="flex bg-defaultText h-[37px] w-[37px] justify-center rounded">
          <Image src="./github.svg" alt="github" width={34} height={34} />
        </div>
        <div className="flex bg-defaultText h-[37px] w-[37px] justify-center rounded">
          <Image src="./linkedin.svg" alt="linkedin" width={35} height={35} />
        </div>
      </div>
    </main>
  );
};
export default Contact;
