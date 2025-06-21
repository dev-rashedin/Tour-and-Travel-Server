import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;


async function main() {
  try {
   
    app.listen(process.env.PORT || 3000, () => { 
      console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
    })
    
  } catch (error) {
    console.error('Error running server:', error);
    
  }
}