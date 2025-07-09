import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import userRouter from './modules/user/user.routes';
import tourRouter from './modules/tour/tour.routes';
import ratingRouter from './modules/rating/rating.routes';
import { globalErrorHandler, NotFoundError, notFoundHandler, UnauthenticatedError, StatusCodes, httpError } from 'express-error-toolkit';
import { show_stack } from './config';

const showStack = show_stack


console.log('Status code in app',StatusCodes.UNAUTHORIZED)


// initialize express application
const app: Application = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/tours', tourRouter) 
app.use('/api/v1/ratings', ratingRouter) // Importing rating routes


// Home route
app.get('/', (req: Request, res: Response) => {

  // // This will be caught by the error handler middleware
  // throw new CustomAPIError('This is a custom error', 500, 'hi error');
 
  res.send(
    '<h1 style="min-height: 100vh; display: flex; justify-content: center; align-items: center">Welcome to the Tour and Travel Server</h1>',
  );
});

app.get('/error', (req: Request, res: Response) => {

  // throw new NotFoundError('This is a custom error');
  // throw new UnauthenticatedError('This is a custom error');
  throw httpError('This is a custom error', 599, 'hi error');
})



app.use(notFoundHandler)
app.use(globalErrorHandler)


export default app;