//Imports
import express from 'express';
import Battle from '../models/battleSchema.mjs';

const router = express.Router();

//CREATE


//READ
router.get(`/`, (reqs, resp)=>{
    resp.send(`Battle Testing`);
})

//UPADTE


//DELETE


//Exports
export default router;