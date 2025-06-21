import express, { Application } from 'express';

const app: Application = express();
import cors from 'cors';
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
