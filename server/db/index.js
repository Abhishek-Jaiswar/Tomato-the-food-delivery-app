import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'

const connectToDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Database connected successfully", connectionInstance.connection.host);
        
    } catch (error) {
        console.log("Error while connecting to database: ");
        console.log(error);
        process.exit(1)
    }
}

export {connectToDb}