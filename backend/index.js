import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';

import { connectDB } from './config/mongodb.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();
const port = process.env.PORT || 5000;
connectDB();

// Allow frontend origin
const allowedOrigins = ['http://localhost:5173'];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Test route
app.get('/', (req, res) => {
  res.send('API is running');
});

// API Routes
app.use('/admin', adminRouter);
app.use('/blogs', blogRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});