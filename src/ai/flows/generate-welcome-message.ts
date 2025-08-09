'use server';

/**
 * @fileOverview A welcome message generator for newcomers based on recent social media posts.
 *
 * - generateWelcomeMessage - A function that generates a personalized welcome message.
 * - GenerateWelcomeMessageInput - The input type for the generateWelcomeMessage function.
 * - GenerateWelcomeMessageOutput - The return type for the generateWelcomeMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWelcomeMessageInputSchema = z.object({
  socialMediaPosts: z
    .string()
    .describe('The latest posts from the social networks.'),
  newcomerDetails: z.string().describe('Details about the newcomer.'),
});
export type GenerateWelcomeMessageInput = z.infer<typeof GenerateWelcomeMessageInputSchema>;

const GenerateWelcomeMessageOutputSchema = z.object({
  welcomeMessage: z.string().describe('A personalized welcome message for the newcomer.'),
});
export type GenerateWelcomeMessageOutput = z.infer<typeof GenerateWelcomeMessageOutputSchema>;

export async function generateWelcomeMessage(
  input: GenerateWelcomeMessageInput
): Promise<GenerateWelcomeMessageOutput> {
  return generateWelcomeMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWelcomeMessagePrompt',
  input: {schema: GenerateWelcomeMessageInputSchema},
  output: {schema: GenerateWelcomeMessageOutputSchema},
  prompt: `You are an AI assistant designed to create personalized welcome messages for newcomers.

  Based on the latest social media posts and details about the newcomer, craft a warm and relevant welcome message.

  Social Media Posts: {{{socialMediaPosts}}}
  Newcomer Details: {{{newcomerDetails}}}

  Welcome Message:`,
});

const generateWelcomeMessageFlow = ai.defineFlow(
  {
    name: 'generateWelcomeMessageFlow',
    inputSchema: GenerateWelcomeMessageInputSchema,
    outputSchema: GenerateWelcomeMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
