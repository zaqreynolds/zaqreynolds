"use client";
import CustomIcon from "@/app/components/CustomIcon";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../contactSchema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const defaultFormData = { name: "", email: "", message: "" };
  // const [formData, setFormData] = useState(defaultFormData);
  const [isButtonActive, setButtonActive] = useState(false);

  const formData = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: defaultFormData,
  });
  console.log("formData: ", formData);
  // const handleFormChange = (
  //   event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  // ) => {
  //   const { id, value } = event.target;
  //   setFormData((prev) => ({ ...prev, [id]: value }));
  // };

  // useEffect(() => {
  //   if (formData.name && formData.email && formData.message) {
  //     setButtonActive(true);
  //   } else {
  //     setButtonActive(false);
  //   }
  // }, [formData]);

  // console.log("formData: ", formData);

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();

  //   const trimmedName = formData.name.trim();
  //   const trimmedEmail = formData.email.trim();

  //   if (trimmedEmail === "" || trimmedName === "") {
  //     alert("Please fill out all fields.");
  //     return;
  //   }

  // Submit the form
  //   const sendForm = async (formData: object) => {
  //     const res = await fetch("/api/contactForm", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const response = await res.json();
  //     console.log("response: ", response);
  //   };
  //   sendForm(formData);
  //   setFormData(defaultFormData);
  // };

  return (
    <main className="flex flex-col p-5 z-0 overflow-y-auto w-full">
      <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl">Contact</h1>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="pb-2">
            I&apos;m always open to new opportunities. Feel free to reach out
            and tell me a little bit about yourself or your project.
          </p>
          <Form {...formData}>
            <form
              // onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center pt-1"
            >
              <FormField
                control={formData.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-80">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>Your name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formData.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-80">
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>Your e-mail</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formData.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-80">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="" {...field} rows={10} cols={30} />
                    </FormControl>
                    <FormDescription>Your message</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <div className="flex flex-col justify-center items-start pb-2">
              <label className="text-left">Name:</label>
              <input
                type="text"
                placeholder="Name"
                className="bg-green-100 text-darkOlive w-80 my-2 p-1 rounded focus:outline-none focus:ring-offset-2 focus:ring-4 ring-lightOlive"
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
                className="bg-green-100 text-darkOlive w-80 my-2 p-1 rounded focus:outline-none focus:ring-offset-2 focus:ring-4 ring-lightOlive"
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
                className="bg-green-100 text-darkOlive w-80 my-2 p-1 rounded focus:outline-none focus:ring-offset-2 focus:ring-4 ring-lightOlive"
                id="message"
                value={formData.message}
                onChange={handleFormChange}
              />
            </div> */}
              <Button
                type="submit"
                // disabled={!isButtonActive}
                // className={`bg-olive text-lightOlive font-bold w-24 my-2 py-2 px-4 rounded
                // ${
                //   isButtonActive
                //     ? "opacity-100 hover:transform hover:scale-105 transition duration-300 ease-in-out ring-1 ring-lightOlive ring-offset-lightOlive shadow-lg"
                //     : "cursor-not-allowed opacity-50"
                // }
                // `}
                // className="bg-olive text-lightOlive font-bold w-24 my-2 py-2 px-4 rounded"
              >
                Submit
              </Button>
            </form>
          </Form>
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
