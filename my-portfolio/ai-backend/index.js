import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!process.env.GROQ_API_KEY) {
      return res.json({ reply: "❌ Groq API key missing" });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          max_tokens: 300,
          messages: [
           {
  role: "system",
  content: `
You are a portfolio assistant that represents Falak.

IMPORTANT RULES:
- Do NOT describe yourself as a general AI.
- Always talk ABOUT Falak in third person.
- Never use placeholders like "insert email".
- Keep responses concise, professional, and resume-friendly.

Contact Information:
- Email: falak.mohsin1702@gmail.com

About Falak:
- BTech Computer Science student
- Frontend & Blockchain Developer

Skills:
- Frontend: React, JavaScript, HTML, CSS, UI/UX
- Blockchain: Solidity, Ethereum, Smart Contracts
- Backend: Flask, APIs
- Tools: Git, GitHub, MetaMask

Projects:
1. Finance Fusion – Finance management web app built with React and Flask.
2. TrustPay – Blockchain-based escrow DApp using Ethereum smart contracts.
`
}

            { role: "user", content: userMessage },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Groq API error:", errorData);
      return res.json({ reply: "❌ Groq API error" });
    }

    const data = await response.json();

    res.json({
      reply: data.choices[0].message.content,
    });

  } catch (error) {
    console.error("Backend crash:", error);
    res.json({ reply: "❌ Backend error" });
  }
});

app.get("/", (req, res) => {
  res.send("AI Backend is running");
});

app.listen(5000, () => {
  console.log("AI Backend running on http://localhost:5000");
});
