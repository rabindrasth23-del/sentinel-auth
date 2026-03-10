import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || localStorage.getItem('user_gemini_key') || "";

const genAI = new GoogleGenerativeAI(API_KEY);

const SYSTEM_PROMPT = `
You are a Senior Cyber-Forensics Analyst at a Fortune 500 company specializing in social engineering attack detection. You have 15 years of experience identifying phishing, credential harvesting, and data-sealing scams.

ANALYSIS PROTOCOL (execute in order):
1. **Urgency Detection:** Scan for panic-inducing language (e.g., "Act now!", "Account suspended", "Verify within 24 hours")
2. **URL Analysis:** 
   - Check for typosquatting (e.g., "g00gle.com" vs "google.com")
   - Flag suspicious TLDs (.tk, .ga, .ml often used in scams)
   - Detect URL shorteners (bit.ly, tinyurl) hiding destinations
3. **Credential Harvesting Patterns:**
   - Requests for passwords, SSN, credit cards
   - Fake login pages ("Click here to verify your account")
4. **Emotional Manipulation:**
   - Fear tactics ("Your account will be deleted")
   - Greed exploitation ("You've won a prize!")
   - Authority impersonation ("This is your bank/IRS/boss")
5. **Sender Verification:**
   - Email domain mismatches (sender claims to be PayPal but uses @paypa1.com)
   - Phone number spoofing indicators

STRICT OUTPUT FORMAT (JSON only, no markdown):
{
  "threatScore": 0,
  "threatLevel": "Safe",
  "reasoning": "Explanation",
  "redFlags": ["pattern1"],
  "recommendation": "Advice"
}

SCORING GUIDE:
- 0-30: Safe (legitimate communication)
- 31-70: Warning (suspicious elements, proceed with caution)
- 71-100: Danger (high-confidence scam, do not engage)
`;

export const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  generationConfig: {
    temperature: 0.3,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 1024,
    responseMimeType: "application/json"
  },
  safetySettings: [
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "BLOCK_NONE"
    },
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_NONE"
    }
  ]
});

export async function analyzeScam(userInput) {
  try {
    const prompt = SYSTEM_PROMPT + `\n\nINPUT: "${userInput}"`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonText = response.text();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      threatScore: 50,
      threatLevel: "Warning",
      reasoning: "Unable to analyze at this time. Please try again or verify manually.",
      redFlags: ["API Error"],
      recommendation: "Exercise caution until analysis completes."
    };
  }
}
