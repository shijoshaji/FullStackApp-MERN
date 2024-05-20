import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome default page');
});



app.listen(PORT, () => {
  console.log('Running server Now is great time', PORT);
});
