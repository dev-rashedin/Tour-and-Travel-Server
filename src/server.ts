import mongoose from 'mongoose';
import app from './app';
import { PORT } from './App/Config';



async function main() {
  try {
   
    app.listen(process.env.PORT || 3000, () => { 
      console.log(`Server is running on http://localhost:${PORT}`);
    })
    
  } catch (error) {
    console.error('Error running server:', error);
    
  }
}