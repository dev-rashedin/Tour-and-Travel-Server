import express, { Application, Request, Response } from 'express';

import cors from 'cors';
const app: Application = express();



// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req: Request, res:Response) => {
  res.json({
    message: 'Welcome to the Travel and Tour Server',
    status: 'success',
    data: {
      name: 'API',
      version: '1.0.0',
      description: 'This is a sample API built with Express.js'
    }
  })
});


export default app;