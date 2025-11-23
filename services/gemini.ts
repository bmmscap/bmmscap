import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const analyzeBusinessIdea = async (idea: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure your environment.";
  }

  try {
    const prompt = `
      You are an expert venture capital strategist and business consultant. 
      Analyze the following business idea briefly (max 150 words). 
      Highlight one major strength, one potential risk, and one strategic recommendation.
      
      Business Idea: "${idea}"
      
      Format the output clearly with bold headings.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate analysis. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while analyzing your idea. Please try again later.";
  }
};