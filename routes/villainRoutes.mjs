//Imports
import express from 'express';
import Villain from '../models/villainSchema.mjs';

const router = express.Router();

//CREATE


//READ
router.get(`/`, (reqs, resp)=>{
    resp.send(`Villain Testing`);
})

//UPADTE


//DELETE


//Exports
export default router;