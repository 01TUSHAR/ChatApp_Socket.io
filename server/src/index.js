import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const PORT = process.env.PORT
const app = express()
connectDB()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)

app.listen(PORT, () => {
  console.log(`server ruunig at ${PORT}`)
})
