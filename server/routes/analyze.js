import express from "express";
import Analysis from "../models/Analysis.js";
import { analyzeFinancialContent } from "../services/aiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({
        message: "Content is required",
      });
    }

    const aiResult = await analyzeFinancialContent(content);

    const newAnalysis = await Analysis.create({
      content: content,
      type: "text",
      claims: aiResult.claims,
      evidenceStrength: aiResult.evidenceStrength,
      education: aiResult.education,
      promotion: aiResult.promotion,
      manipulationSignals: aiResult.manipulationSignals,
      missingEvidence: aiResult.missingEvidence,
      simpleHindi: aiResult.simpleHindi,
      uncertainty: aiResult.uncertainty,
    });

    res.status(201).json({
      message: "AI analysis completed successfully!",
      analysisId: newAnalysis._id,
      content: content,
      analysis: aiResult,
    });
  } catch (error) {
    console.error("AI analysis error:", error);

    res.status(500).json({
      message: "AI analysis failed",
      error: error.message,
    });
  }
});

export default router;
