import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, {
      message: "Please enter your name, thank you.",
    })
    .max(50, { message: "Name is too long " }),
  email: z.string().email().min(1, { message: "Please enter a valid email." }),
  message: z.string().min(1, { message: "Please enter a message." }),
});
