import express, { Application, Request, Response } from 'express';

import cors from 'cors';
const app: Application = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req: Request, res:Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app; 