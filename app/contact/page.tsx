import CustomIcon from "@/app/components/CustomIcon";
import ContactForm from "./ContactForm";
import { contactSchema } from "../contactSchema";

const Contact = () => {
  const onFormAction = async (formData: FormData) => {
    "use server";
    const data = Object.fromEntries(formData);
    const parsed = contactSchema.safeParse(data);

    if (parsed.success) {
      console.log("Form submitted!", parsed.data);
      return {
        message: "Form submitted!",
        submission: parsed.data,
        status: 200,
      };
    } else {
      return {
        message: "invalid data",
        issues: parsed.error.issues.map((issue) => issue.message),
      };
    }
  };

  return (
    <main className="flex flex-col p-5 z-0 overflow-y-auto w-full">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">Contact</h1>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="pb-2">
            I&apos;m always open to new opportunities. Feel free to reach out
            and tell me a little bit about yourself or your project.
          </p>
        </div>
        <ContactForm onFormAction={onFormAction} />
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
