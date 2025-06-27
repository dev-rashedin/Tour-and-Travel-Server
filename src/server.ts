import mongoose from 'mongoose';
import app from './app';
import { mongodb_uri, port } from './Config';

console.log(`Connecting to MongoDB at ${mongodb_uri}`);



async function main() {
  try {

    // Connect to MongoDB
    await mongoose.connect(mongodb_uri)

    console.log('Successfully connected to MongoDB');
   
    app.listen(process.env.PORT || 3000, () => { 
      console.log(`Server is running on http://localhost:${port}`);
    })
    
  } catch (error) {
    console.error('Error running server:', error);
    
  }
}

main();