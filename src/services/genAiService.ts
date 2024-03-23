import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCNjJEPln2NKN1VzvitPZ6ASN9sWLksGHU";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const gemini_pro_model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function textInputService(prompt: string): Promise<string> {
  const result = await gemini_pro_model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}
