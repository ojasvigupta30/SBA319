//Imports
import express from 'express';
import Villain from '../models/villainSchema.mjs';

const router = express.Router();

//CREATE
router.post(`/`, async(reqs, resp)=>{

    try {
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg:`Server Error`});
        
    }

});

//READ
router.get(`/`, (reqs, resp)=>{
    resp.send(`Villain Testing`);
})

//UPADTE


//DELETE


//Exports
export default router;