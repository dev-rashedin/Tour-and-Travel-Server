import dotenv from 'dotenv';
dotenv.config(  );

const port = process.env.PORT || 3000;
const mongodb_uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4qgkjzt.mongodb.net/tour-and-travel-db`;
const show_stack = 0




export { port, mongodb_uri, show_stack };
