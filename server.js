import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// FIXME Throws 404

const claudeProxy = createProxyMiddleware({
  target: 'https://claude.ai/chats',
  changeOrigin: true,
  secure: true
});

// FIXME Throws SSL Error

const openAIProxy = createProxyMiddleware({
  target: 'https://chat.openai.com',
  changeOrigin: true,
  secure: true
});


app.use('/claude2', claudeProxy);
app.use('/openai', openAIProxy);

app.listen(5173);
