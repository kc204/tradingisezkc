'use server';
import { propFirmRecommendation, type PropFirmRecommendationInput, type PropFirmRecommendationOutput } from '@/ai/flows/prop-firm-recommendation';
import { generateSentimentSummary, type SentimentSummaryInput, type SentimentSummaryOutput } from '@/ai/flows/sentiment-summary';
import { z } from 'zod';

// Define Zod schema for input validation
const RecommendationInputSchema = z.object({
  riskProfile: z.string().min(1, "Risk profile is required."),
  tradingStyle: z.string().min(1, "Trading style is required."),
});

export async function getAiPropFirmRecommendationAction(input: PropFirmRecommendationInput): Promise<{ data?: PropFirmRecommendationOutput; error?: string }> {
  const validationResult = RecommendationInputSchema.safeParse(input);
  if (!validationResult.success) {
    return { error: validationResult.error.errors.map(e => e.message).join(', ') };
  }

  try {
    const result = await propFirmRecommendation(validationResult.data);
    return { data: result };
  } catch (error) {
    console.error("Error in AI prop firm recommendation action:", error);
    // In a real app, you might want to log this error more robustly
    return { error: "Failed to get AI recommendation due to a server error." };
  }
}

// Action for Sentiment Summary Generation
const SentimentSummaryInputSchema = z.object({
  redditContent: z.string(),
  youtubeContent: z.string(),
});

export async function generateSentimentSummaryAction(input: SentimentSummaryInput): Promise<{ data?: SentimentSummaryOutput; error?: string }> {
  const validationResult = SentimentSummaryInputSchema.safeParse(input);
  if (!validationResult.success) {
    return { error: validationResult.error.errors.map(e => e.message).join(', ') };
  }

  try {
    const result = await generateSentimentSummary(validationResult.data);
    return { data: result };
  } catch (error) {
    console.error("Error in AI sentiment summary action:", error);
    return { error: "Failed to generate AI summary due to a server error." };
  }
}
