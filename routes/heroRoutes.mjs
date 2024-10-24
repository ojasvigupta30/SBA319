//Imports
import express from 'express';
import Hero from '../models/heroSchema.mjs';

const router = express.Router();

//CREATE



//READ
router.get(`/`, (reqs, resp)=>{
    resp.send(`Hero Testing`);
})


//UPDATE



//DELETE



//Exports
export default router;