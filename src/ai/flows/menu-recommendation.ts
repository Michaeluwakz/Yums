'use server';
/**
 * @fileOverview This file defines a Genkit flow for recommending menu items based on the current weather in Manchester.
 *
 * - recommendMenuItem - A function that takes the current weather as input and returns a menu item recommendation.
 * - RecommendMenuItemInput - The input type for the recommendMenuItem function.
 * - RecommendMenuItemOutput - The return type for the recommendMenuItem function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { menuData } from '@/lib/data';

const RecommendMenuItemInputSchema = z.object({
  weather: z.string().describe('The current weather conditions in Manchester.'),
});
export type RecommendMenuItemInput = z.infer<typeof RecommendMenuItemInputSchema>;

const RecommendMenuItemOutputSchema = z.object({
  menuItem: z.string().describe('A recommended menu item based on the weather. This MUST be an exact name from the provided menu.'),
  reason: z.string().describe('The reason for recommending this menu item, connecting it to African-Caribbean culture and the weather.'),
});
export type RecommendMenuItemOutput = z.infer<typeof RecommendMenuItemOutputSchema>;

export async function recommendMenuItem(input: RecommendMenuItemInput): Promise<RecommendMenuItemOutput> {
  return recommendMenuItemFlow(input);
}

const PromptInputSchema = z.object({
    weather: z.string().describe('The current weather conditions in Manchester.'),
    menuJSON: z.string().describe('The restaurant menu in JSON format.'),
});

const prompt = ai.definePrompt({
  name: 'recommendMenuItemPrompt',
  input: {schema: PromptInputSchema},
  output: {schema: RecommendMenuItemOutputSchema},
  prompt: `You are an expert AI chef for YUMSQUAD, a restaurant specializing in authentic and modern African-Caribbean cuisine. Your recommendations should be full of flavour and personality.

Your task is to recommend a single, perfect dish from the menu based on the weather in Manchester. You MUST choose an item ONLY from the provided menu list.

Here is the full menu, in JSON format:
\`\`\`json
{{{menuJSON}}}
\`\`\`

Current weather: {{{weather}}}

Think like a chef who knows their food and culture.
- For cold, rainy, or windy days, suggest warm, hearty, or spicy comfort foods. Think rich stews, soulful Jollof rice, or something with a spicy kick to warm you up.
- For warm and sunny days, suggest something lighter, grilled, or more refreshing.

Your reasoning should be short, evocative, and connect the dish to the weather and the vibrant experience of African-Caribbean food.

Crucially, the 'menuItem' field in your response MUST exactly match the 'name' of a dish from the JSON menu provided.
`,
});

const recommendMenuItemFlow = ai.defineFlow(
  {
    name: 'recommendMenuItemFlow',
    inputSchema: RecommendMenuItemInputSchema,
    outputSchema: RecommendMenuItemOutputSchema,
  },
  async input => {
    const menuJSON = JSON.stringify(menuData, null, 2);
    const {output} = await prompt({
        weather: input.weather,
        menuJSON: menuJSON,
    });
    return output!;
  }
);
