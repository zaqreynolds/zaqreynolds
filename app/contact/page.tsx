import ContactForm from "./ContactForm";
import { contactSchema } from "../contactSchema";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import PrimaryNav from "../components/PrimaryNav";

const Contact = () => {
  const onFormAction = async (formData: FormData) => {
    "use server";
    const data = Object.fromEntries(formData);
    const parsed = contactSchema.safeParse(data);

    if (parsed.success) {
      return {
        message: "Form submitted!",
        submission: parsed.data,
        status: 200,
      };
    } else {
      return {
        message: "invalid data",
        issues: parsed.error.issues.map((issue) => issue.message),
        status: 400,
      };
    }
  };

  return (
    <main className="flex flex-col p-5 z-0 overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:flex h-full">
          <PrimaryNav />
        </div>
        <div className="flex flex-col flex-1 md:mr-8 md:mt-4 overflow-hidden">
          <h1 className="mb-4 text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">
            Contact
          </h1>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p>
                I&apos;m always open to new opportunities. Feel free to reach
                out and tell me a little bit about yourself or your project.
              </p>
            </div>
            <ContactForm onFormAction={onFormAction} />
            <div className="flex px-2 justify-center">
              <Link
                href="https://github.com/zaqreynolds"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-all border-opacity-60 hover:border-opacity-100 duration-500 ease-in-out border-2 border-lightOlive rounded-lg hover:rounded-2xl p-1 hover:bg-lightOlive hover:bg-hover hover:bg-opacity-20 hover:shadow-lg shadow-black cursor-pointer"
              >
                <GitHubLogoIcon width={35} height={35} />
              </Link>
              <div className="w-32" />
              <Link
                href="https://www.linkedin.com/in/zaqreynolds/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-all border-opacity-60 hover:border-opacity-100 duration-500 ease-in-out border-2 border-lightOlive rounded-lg hover:rounded-2xl p-1 hover:bg-lightOlive hover:bg-hover hover:bg-opacity-20 hover:shadow-lg shadow-black cursor-pointer"
              >
                <LinkedInLogoIcon width={35} height={35} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
