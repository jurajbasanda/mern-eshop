import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.blue.bold)
    }
    catch (error) {
        console.log(`Error: ${error.messege}`)
        process.exit(1)
    }
}
export default connectDB

