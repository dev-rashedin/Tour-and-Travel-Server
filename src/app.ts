import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

import notFoundMiddleware from './middleware/not-found';
import errorHandlerMiddleware from './middleware/error-handler';
import { CustomAPIError } from './error';



// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req: Request, res: Response) => {

  // // This will be caught by the error handler middleware
  // throw new CustomAPIError('This is a custom error', 500, 'hi error');
 
  res.send(
    '<h1 style="min-height: 100vh; display: flex; justify-content: center; align-items: center">Welcome to the Tour and Travel Server</h1>',
  );
});

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware);


export default app;