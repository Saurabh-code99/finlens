import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import analyzeRouter from "./routes/analyze.js";

dotenv.config();
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/analyze", analyzeRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });

app.get("/", (req, res) => {
  res.json({
    message: "FINLENS backend is running!",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`FINLENS server running on http://localhost:${PORT}`);
});
