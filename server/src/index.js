import express, { json } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
dotenv.config();


const app = express();


app.use(express.json());
app.use(cookieParser())
connectDB()
app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})