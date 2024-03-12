"use client";
import { useEffect, useState } from "react";
import { contactSchema } from "../contactSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = ({
  onFormAction,
}: {
  onFormAction: (data: FormData) => Promise<{
    message: string;
    submission?: z.infer<typeof contactSchema>;
    issues?: string[];
    status: number;
  }>;
}) => {
  const defaultFormData = { name: "", email: "", message: "" };

  const [isButtonActive, setButtonActive] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: defaultFormData,
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    const response = await onFormAction(formData);

    if (response.status === 200) {
      const templateParams = {
        from_name: response?.submission?.name,
        from_email: response?.submission?.email,
        message: response?.submission?.message,
      };
      await emailjs
        .send(
          "service_hwgsdre",
          "template_yc0d9h8",
          templateParams,
          `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
        )
        .then(
          (response) => {
            console.log("EmailJs SUCCESS!", response.status, response.text);
          },
          (error) => {
            console.log("EmailJs FAILED...", error);
          }
        );
      form.reset(defaultFormData);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center pt-1"
      >
        <FormField
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
  );
};

export default ContactForm;
