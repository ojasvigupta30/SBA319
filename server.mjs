//Imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';
import heroRoutes from './routes/heroRoutes.mjs';


//Setups
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

//Database Connection
connectDB();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


//Routes
app.use(`/`, heroRoutes);


//Listener
app.listen(PORT, (reqs, resp) => {
    console.log(`Server is running on PORT: ${PORT}`);
})