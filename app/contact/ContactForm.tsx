"use client";
import { useEffect, useRef, useState } from "react";
import { contactSchema } from "../contactSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: defaultFormData,
  });

  const { watch } = form;
  const formName = watch("name");
  const formEmail = watch("email");
  const formMessage = watch("message");

  useEffect(() => {
    if (formName && formEmail && formMessage) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [formName, formEmail, formMessage]);

  let recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setIsLoading(true);

    const recaptchaToken = await recaptchaRef?.current?.executeAsync();
    recaptchaRef?.current?.reset();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const recaptchaResponse = await fetch("/api/recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recaptchaToken }),
    });

    if (recaptchaResponse.ok) {
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
              setIsLoading(false);
              setFormSubmitted(true);
            },
            (error) => {
              console.log("EmailJs FAILED...", error);
              setIsLoading(false);
            }
          );
        form.reset(defaultFormData);
      }
    } else {
      setIsLoading(false);
      form.reset(defaultFormData);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center pb-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-80 pb-3">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-80 pb-3">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>

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

              <FormMessage />
            </FormItem>
          )}
        />
        {!formSubmitted ? (
          <Button
            type="submit"
            disabled={!isButtonActive}
            className={`bg-lightOlive text-black font-bold w-24 my-2 py-2 px-4 mt-4 rounded
          ${
            isButtonActive
              ? "opacity-100 hover:transform hover:scale-105 transition duration-300 ease-in-out ring-1 ring-lightOlive ring-offset-lightOlive shadow-lg shadow-black hover:bg-blue-200"
              : "cursor-not-allowed opacity-50"
          }
          `}
          >
            {isLoading ? (
              <ReloadIcon
                width="20"
                height="20"
                className="mr-2 animate-spin"
              />
            ) : (
              "Submit"
            )}
          </Button>
        ) : (
          <div className="bg-lightOlive text-black font-bold my-2 py-2 px-4 mt-4 rounded">
            Form submitted!
          </div>
        )}
      </form>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LeziJkpAAAAAPefhmaT3RnSMDZEOP_jG3ojCMch"
        size="invisible"
        theme="dark"
      />
    </Form>
  );
};

export default ContactForm;
