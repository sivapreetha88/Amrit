import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

export const getAyurvedicTips = async (concern: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide 3 short, practical Ayurvedic health tips for the following concern: ${concern}. 
      Focus on diet, lifestyle, and simple home remedies. 
      Keep the tone professional and caring. 
      Format as a JSON array of strings.`,
      config: {
        responseMimeType: "application/json",
      }
    });
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error fetching Ayurvedic tips:", error);
    return ["Maintain a regular daily routine (Dinacharya).", "Eat freshly cooked, warm meals.", "Practice mindful breathing (Pranayama)."];
  }
};
