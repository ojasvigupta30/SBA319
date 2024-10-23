//Imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';




//Setups
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

//Database Connection


//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


//Routes


//Listener
app.listen(PORT, (reqs, resp) => {
    console.log(`Server is running on PORT: ${PORT}`);
})