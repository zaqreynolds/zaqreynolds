import CustomIcon from "@/components/CustomIcon";

const Contact = () => {
  return (
    <main className="flex flex-col p-5 z-0 overflow-y-auto w-full">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">Contact</h1>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="pb-2">
            I&apos;m always open to new opportunities. Feel free to reach out to
            and tell me a little bit about yourself or your project.
          </p>
          <form className="flex flex-col justify-center items-center">
            <textarea
              rows={10}
              cols={30}
              className="bg-green-100 text-darkOlive w-80 my-2"
            />

            <button
              type="submit"
              className="bg-olive text-default font-bold w-24 my-2 py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex px-2 justify-center">
          <CustomIcon iconType="GitHub" link="https://github.com/zaqreynolds" />
          <div className="w-10" />
          <CustomIcon
            iconType="LinkedIn"
            link="https://www.linkedin.com/in/zaqreynolds/"
          />
        </div>
      </div>
    </main>
  );
};
export default Contact;
