import dotenv from 'dotenv';
dotenv.config(  );

const port = process.env.PORT || 3000;
const mongodb_uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4qgkjzt.mongodb.net`;

export { port, mongodb_uri };
