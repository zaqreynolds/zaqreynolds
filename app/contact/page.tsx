"use client";
import CustomIcon from "@/app/components/CustomIcon";
import { useEffect, useState } from "react";

const Contact = () => {
  const defaultFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(defaultFormData);
  const [isButtonActive, setButtonActive] = useState(false);

  const handleFormChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  useEffect(() => {
    if (formData.name && formData.email && formData.message) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [formData]);

  console.log("formData: ", formData);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();

    if (trimmedEmail === "" || trimmedName === "") {
      alert("Please fill out all fields.");
      return;
    }

    // Submit the form
    setFormData(defaultFormData);
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center pt-1"
          >
            <div className="flex flex-col justify-center items-start pb-2">
              <label className="text-left">Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="bg-green-100 text-darkOlive w-80 my-2 p-1 rounded"
                id="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </div>
            <div className="flex flex-col justify-center items-start pb-2">
              <label className="text-left">E-mail:</label>
              <input
                type="email"
                placeholder="Email"
                className="bg-green-100 text-darkOlive w-80 my-2 p-1 rounded"
                id="email"
                value={formData.email}
                onChange={handleFormChange}
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label className="text-left">Message:</label>
              <textarea
                placeholder="Write your message here"
                rows={10}
                cols={30}
                className="bg-green-100 text-darkOlive w-80 my-2 p-1 rounded"
                id="message"
                value={formData.message}
                onChange={handleFormChange}
              />
            </div>
            <button
              type="submit"
              disabled={!isButtonActive}
              className={`bg-olive text-default font-bold w-24 my-2 py-2 px-4 rounded ${
                isButtonActive ? "opacity-100" : "cursor-not-allowed opacity-50"
              }`}
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
