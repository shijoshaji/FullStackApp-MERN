import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/dbConnect';



dotenv.config();

const PORT = process.env.BACKEND_PORT || 5001;
const app = express();


// Cors configuration - Allows requests from localhost:4200
const corsOptions = {
  origin: `http://localhost:${process.env.FRONTEND_PORT}`,
  optionsSuccessStatus: 204,
  methods: 'GET, POST, PUT, DELETE',
  credentials: true
};

// Use cors middleware
app.use(cors(corsOptions));

// Use express.json() middleware to parse JSON bodies of requests
app.use(express.json());

// 
app.use(express.urlencoded({ extended: true }));





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

