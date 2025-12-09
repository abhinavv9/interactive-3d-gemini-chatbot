import { GoogleGenerativeAI } from "@google/generative-ai";

// Access the API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("Gemini API key not found. Please set VITE_GEMINI_API_KEY in your .env file.");
}

// Initialize the Generative AI client
const genAI = new GoogleGenerativeAI(API_KEY);

// Configure the model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

/**
 * Sends a prompt to the Gemini API and returns the response text.
 * @param prompt The user's input prompt.
 * @returns A promise that resolves with the Gemini API's text response.
 */
export const getGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Provide a user-friendly error message
    return "Sorry, I couldn't get a response from Gemini at this moment. Please try again later.";
  }
};
