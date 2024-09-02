import dotenv from 'dotenv';
import { Ollama } from '@langchain/community/llms/ollama';

dotenv.config();

const ollama = new Ollama({
    baseUrl: process.env.OLLAMA_BASE_URL,
    model: process.env.OLLAMA_MODEL,
});

export const getChatResponse = async (req, res) => {
  const { userMessage } = req.body;

  if (!userMessage) {
    return res.status(400).json({ error: 'El mensaje del usuario es requerido.' });
  }

  try {
    const response = await ollama._call(`responder el siguiente mensaje: ${userMessage}. Hacerlo en español.`);
    res.json({ response: response.trim() });
  } catch (error) {
    console.error("Error al obtener la respuesta:", error);
    res.status(500).json({ error: 'Error al obtener la respuesta del modelo.' });
  }
};
