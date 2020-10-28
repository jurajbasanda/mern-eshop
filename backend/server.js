import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import * as path from 'path'
dotenv.config()

connectDB()

const app = express()
app.use(express.json())

//Router
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req, res) =>
	res.send(process.env.PAYPAL_CLIENT_ID)
) //Errors
app.use(notFound)
app.use(errorHandler)
//Check if it's in production
if(process.env.NODE_ENV === 'production'){
//Set static folder
app.use(express.static('../frontend/build'))
app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,'../frontend','build','index.html'))
})
}
//Set PORT
const PORT = process.env.PORT || 5000
//Start server
app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
