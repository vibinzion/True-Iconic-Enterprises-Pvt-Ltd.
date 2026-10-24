import { google } from '@ai-sdk/google';
import { streamText, convertToModelMessages } from 'ai';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { messages } = await req.json();

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

  return (result as any).toUIMessageStreamResponse 
    ? (result as any).toUIMessageStreamResponse() 
    : (result as any).toTextStreamResponse();
}
