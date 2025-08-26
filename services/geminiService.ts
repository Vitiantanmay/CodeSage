
import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult, SimulationResult } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    explanation: {
      type: Type.STRING,
      description: "A clear, natural language explanation of the error or code logic. If no error, explain what the code does.",
    },
    suggestions: {
      type: Type.ARRAY,
      description: "An array of concrete code change suggestions to fix the error. Can be empty if no errors.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: "A short, descriptive title for the suggested fix.",
          },
          diff: {
            type: Type.STRING,
            description: "A code patch in the unified diff format. Example: '--- a/file.js\\n+++ b/file.js\\n@@ -1,3 +1,3 @@\\n- const x = 1;\\n+ const x = 2;\\n  console.log(x);'"
          }
        },
        required: ['title', 'diff']
      }
    },
    optimizations: {
      type: Type.ARRAY,
      description: "An array of optional micro-optimizations for the provided code snippet.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: "A short, descriptive title for the optimization.",
          },
          description: {
            type: Type.STRING,
            description: "A brief explanation of why this optimization is beneficial.",
          },
          diff: {
            type: Type.STRING,
            description: "A code patch for the optimization in the unified diff format."
          }
        },
        required: ['title', 'description', 'diff']
      }
    }
  },
  required: ['explanation', 'suggestions', 'optimizations']
};

const simulationSchema = {
  type: Type.OBJECT,
  properties: {
    output: {
      type: Type.STRING,
      description: "The predicted standard output of the code. Empty string if no output."
    },
    error: {
      type: Type.STRING,
      description: "The predicted compile-time or runtime error message. Empty string if no error."
    }
  },
  required: ['output', 'error']
};

export const simulateExecution = async (code: string, language: string, input: string): Promise<SimulationResult> => {
    const inputContext = input
    ? `The user has provided the following standard input (stdin). Use this for the execution simulation:
      --- STDIN ---
      ${input}
      --- END STDIN ---`
    : 'No standard input (stdin) was provided.';

  const prompt = `
    You are an advanced code execution simulator. Analyze the following ${language} code snippet and predict its output as if it were compiled and run.
    ${inputContext}
    - If the code compiles and runs successfully, provide the standard output in the 'output' field and an empty string in the 'error' field.
    - If the code will not compile or will throw a runtime error, provide a concise, single-line error message in the 'error' field and leave 'output' as an empty string.
    - If the code runs but produces no output, 'output' should be an empty string.
    - If the code requires input and none is provided, simulate the behavior (e.g., waiting for input, or erroring out).

    You MUST respond in a valid JSON format that adheres to the provided schema. Do not include any text, markdown formatting, or explanations outside of the JSON structure.

    --- CODE SNIPPET ---
    ${code}
    --- END CODE SNIPPET ---
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: simulationSchema
      }
    });

    const jsonText = response.text.trim();
    const parsedResult: SimulationResult = JSON.parse(jsonText);
    return parsedResult;

  } catch (e) {
    console.error("Gemini simulation call failed:", e);
    throw new Error("Failed to simulate code execution with the AI. The model may be unavailable or the response was malformed.");
  }
};

export const analyzeCode = async (code: string, language: string, error: string | null, input: string): Promise<AnalysisResult> => {
  const errorContext = error
    ? `The code produced the following runtime error:
      --- ERROR MESSAGE ---
      ${error}
      --- END ERROR MESSAGE ---
      Your primary goal is to explain this error and suggest fixes for it.`
    : `The code ran without runtime errors. Your goal is to perform a static analysis. Check for potential bugs, style issues, and suggest any possible micro-optimizations. If no issues are found, you can state that the code looks good but still provide an explanation of what it does.`;

  const inputContext = input
    ? `The user also provided this standard input (stdin), which might be relevant context for your analysis:
      --- STDIN ---
      ${input}
      --- END STDIN ---`
    : '';

  const prompt = `
    You are CodeSage, an expert AI programmer and debugger. Your task is to analyze a given code snippet.
    ${errorContext}
    ${inputContext}

    Provide a clear explanation, suggest concrete fixes as unified diffs (if applicable), and offer potential code optimizations.

    You MUST respond in a valid JSON format that adheres to the provided schema. Do not include any text, markdown formatting, or explanations outside of the JSON structure.

    Analyze the following code written in ${language}:

    --- CODE SNIPPET ---
    ${code}
    --- END CODE SNIPPET ---
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema
      }
    });

    const jsonText = response.text.trim();
    const parsedResult: AnalysisResult = JSON.parse(jsonText);
    return parsedResult;
  } catch (e) {
    console.error("Gemini API call failed:", e);
    throw new Error("Failed to get a valid analysis from the AI. The model may be unavailable or the response was malformed.");
  }
};
