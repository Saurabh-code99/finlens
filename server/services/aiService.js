import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.AI_API_KEY,
});

export async function analyzeFinancialContent(content) {
  const prompt = `
You are FINLENS, an investor-protection and financial-content literacy assistant.

Your job is NOT to provide investment advice.

Analyze the following financial content and return ONLY valid JSON.

Identify:
1. Financial claims
2. Evidence strength
3. Education vs promotion intent
4. Manipulation/persuasion signals
5. Missing evidence or context
6. Plain-language explanation
7. Hindi explanation
8. Uncertainty

IMPORTANT SCORING RULES:

Education and promotion must be scored from 0 to 100.

Educational content includes:
- General financial knowledge
- Budgeting
- Saving
- Emergency funds
- Financial literacy
- Explaining financial concepts
- Explaining risks or concepts in a neutral way
- Content that helps people understand finance without asking them to buy or join something

Promotional content includes:
- Asking users to buy, invest, join or register
- Advertising a financial product or service
- Promising profits or returns
- Guaranteed returns
- Urgency or limited-time offers
- Strong calls to action
- Persuasive marketing language
- Directing users to WhatsApp, Telegram or private groups for financial offers

Scoring rules:
- Clearly educational and non-promotional content:
  education should usually be 80-100
  promotion should usually be 0-20

- Clearly promotional content:
  promotion should usually be 80-100
  education should usually be 0-20

- Mixed educational and promotional content:
  give balanced scores based on the actual content.

The education and promotion scores should approximately add up to 100.

EVIDENCE STRENGTH:

Use ONLY one of:
- high
- medium
- low
- none
- insufficient

Use:
- high when the content provides strong, specific and verifiable evidence
- medium when some useful evidence is provided but important details are missing
- low when claims have weak or limited support
- none when there is essentially no supporting evidence
- insufficient when the available content is not enough to judge the evidence

Do not treat confident language as evidence.

MANIPULATION SIGNALS:

Look for signals such as:
- Artificial urgency
- Unrealistic return promises
- Guaranteed returns
- Zero-risk claims
- Fear of missing out (FOMO)
- Social proof without verification
- Authority appeal without evidence
- Emotional pressure
- Excessive certainty
- Private messaging or group redirection
- Pressure to act immediately

Only include signals that are actually present in the content.

MISSING EVIDENCE:

Identify specific information that is missing and would be useful for evaluating the claims.

Examples:
- Source of the claim
- Historical performance data
- Independent verification
- Risk information
- Methodology
- Terms and conditions
- Time period
- Regulatory or official source
- Evidence supporting success rate

Do not invent missing information.

SAFETY RULES:

- Never recommend buying, selling or holding any security.
- Never predict prices or returns.
- Never tell the user what investment decision to make.
- Do not call something fraud unless the evidence clearly supports it.
- Distinguish promotional content from fraudulent content.
- Do not use TRUE/FALSE when evidence is incomplete.
- Clearly communicate uncertainty.
- Explain the content without giving investment advice.

Return JSON in EXACTLY this structure:

{
  "claims": [],
  "evidenceStrength": "",
  "education": 0,
  "promotion": 0,
  "manipulationSignals": [],
  "missingEvidence": [],
  "simpleExplanation": "",
  "simpleHindi": "",
  "uncertainty": ""
}

Important:
- Return ONLY JSON.
- Do not use markdown.
- Do not wrap the JSON in \`\`\`json.
- education and promotion must be numbers.
- claims, manipulationSignals and missingEvidence must be arrays.
- Keep the explanations simple and understandable for ordinary users.
- Do not give investment recommendations.

Financial content:
${content}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt,
  });

  const text = response.text;

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedText);
}
