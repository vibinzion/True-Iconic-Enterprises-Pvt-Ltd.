import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { google } from '@ai-sdk/google';
import { streamText, convertToModelMessages } from 'ai';
import path from 'path';

// Load .env.local
dotenv.config({ path: '.env.local' });
dotenv.config();

function chatApiPlugin() {
  return {
    name: 'chat-api-plugin',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url === '/api/chat' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const { messages } = JSON.parse(body || '{}');
              const system = `You are 'TIE Agent', the official customer support AI for True Iconic Enterprises (Pvt) Ltd. (SECP No: 0359617). Guide users about our 8 core services (Manpower, Janitorial, Facility Management, Transport, Warehousing, Civil Work, Packing, Supplies), Annual Contracts, and Special Duties (1 Day to 1 Month). Be persuasive, highly professional, and strictly direct them to WhatsApp 03212350012 or trueiconic.ent@gmail.com for final quotes. Never invent false pricing.`;

              const modelName = process.env.GEMINI_MODEL || 'gemini-3.5-flash';

              let modelMessages = messages || [];
              try {
                modelMessages = await convertToModelMessages(messages || []);
              } catch (conversionErr) {
                console.warn('Fallback: using raw messages', conversionErr);
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
            } catch (err: any) {
              console.error('Chat API Error:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message || 'Internal Server Error' }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), chatApiPlugin()],
  resolve: {
    alias: {
      'ai/react': path.resolve(__dirname, 'node_modules/@ai-sdk/react'),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
