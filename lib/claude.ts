
import Anthropic from "@anthropic-ai/sdk";

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function generateReply(review: string) {
  const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 300,
    system:
      "You are a professional local business reputation manager.",
    messages: [
      {
        role: "user",
        content: review,
      },
    ],
  });

  return response.content;
}
