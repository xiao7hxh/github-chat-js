import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o";

let conversationHistory = [
  { role: "system", content: "You are a helpful assistant." }
];

const client = new OpenAI({ baseURL: endpoint, apiKey: token });

app.post('/api/chat', async (req, res) => {
  const userInput = req.body.message;

  conversationHistory.push({ role: "user", content: userInput });

  try {
    const response = await client.chat.completions.create({
      messages: conversationHistory,
      model: modelName,
      temperature: 1.0,
      max_tokens: 1000,
      top_p: 1.0
    });

    const aiReply = response.choices[0].message.content;
    conversationHistory.push({ role: "assistant", content: aiReply });

    res.json({ reply: aiReply });
  } catch (error) {
    res.status(500).send('Error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
