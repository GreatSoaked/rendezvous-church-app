'use server'

import { generateWelcomeMessage, GenerateWelcomeMessageInput } from "@/ai/flows/generate-welcome-message";
import { z } from "zod";

const WelcomeMessageSchema = z.object({
  socialMediaPosts: z.string().min(10, "Please provide more details from social media posts."),
  newcomerDetails: z.string().min(10, "Please provide more details about the newcomer."),
});

type State = {
    message?: string | null;
    errors?: {
        socialMediaPosts?: string[];
        newcomerDetails?: string[];
    } | null;
}

export async function getWelcomeMessage(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = WelcomeMessageSchema.safeParse({
    socialMediaPosts: formData.get('socialMediaPosts'),
    newcomerDetails: formData.get('newcomerDetails'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check the fields.',
    };
  }

  try {
    const result = await generateWelcomeMessage(validatedFields.data);
    return { message: result.welcomeMessage, errors: null };
  } catch (error) {
    console.error(error);
    return { message: "An error occurred while generating the message. Please try again.", errors: null };
  }
}
