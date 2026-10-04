import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["text", "image"],
      default: "text",
    },

    claims: {
      type: Array,
      default: [],
    },

    evidenceStrength: {
      type: String,
      default: "",
    },

    education: {
      type: Number,
      default: 0,
    },

    promotion: {
      type: Number,
      default: 0,
    },

    manipulationSignals: {
      type: Array,
      default: [],
    },

    missingEvidence: {
      type: Array,
      default: [],
    },

    simpleHindi: {
      type: String,
      default: "",
    },
    uncertainty: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const Analysis = mongoose.model("Analysis", analysisSchema);

export default Analysis;
