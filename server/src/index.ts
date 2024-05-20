import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/dbConnect';



dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();





app.get('/', (req, res) => {
  res.status(200).send('Welcome default page');
});



connectDB()
  .then((message) => {
    console.log('DB Connected');
    app.listen(PORT, () => {
      console.log(`Running server: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

