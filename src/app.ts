import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

import notFound from './middleware/not-found';



// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req: Request, res:Response) => {
  res.send('<h1 style="min-height: 100vh; display: flex; justify-content: center; align-items: center">Welcome to the Tour and Travel Server</h1>');
});

app.use(notFound)


export default app;