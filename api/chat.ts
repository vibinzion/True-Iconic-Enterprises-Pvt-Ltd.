import { google } from '@ai-sdk/google';
import { streamText, convertToModelMessages } from 'ai';

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  const system = `You are 'TIE Agent', the official customer support AI for True Iconic Enterprises (Pvt) Ltd. (SECP No: 0359617). Guide users about our 8 core services (Manpower, Janitorial, Facility Management, Transport, Warehousing, Civil Work, Packing, Supplies), Annual Contracts, and Special Duties (1 Day to 1 Month). Be persuasive, highly professional, and strictly direct them to WhatsApp 03212350012 or trueiconic.ent@gmail.com for final quotes. Never invent false pricing.`;

  const modelName = process.env.GEMINI_MODEL || 'gemini-3.5-flash';

  let modelMessages = messages || [];
  try {
    modelMessages = await convertToModelMessages(messages || []);
  } catch {
    // using raw if already converted
  }

  const result = streamText({
    model: google(modelName),
    system,
    messages: modelMessages,
  });

  if ((result as any).pipeUIMessageStreamToResponse) {
    (result as any).pipeUIMessageStreamToResponse(res);
  } else if ((result as any).toUIMessageStreamResponse) {
    const response = (result as any).toUIMessageStreamResponse();
    response.headers.forEach((v: string, k: string) => res.setHeader(k, v));
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
    res.end();
  } else {
    (result as any).pipeTextStreamToResponse(res);
  }
}
