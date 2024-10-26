//Imports
import mongoose from "mongoose";
import dotenv from 'dotenv';

//Setup
dotenv.config();

//Connection string variable created
const connectionString = process.env.mongoURI;

//Async function to connect mongoose database
export default async function connectDB() {

    try {

        await mongoose.connect(connectionString);
        console.log(`MongooseDB is connected....`);

    } catch (err) {

        console.error(err);
        process.exit(1);

    }

}
