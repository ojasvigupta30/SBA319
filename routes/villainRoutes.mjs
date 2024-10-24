//Imports
import express from 'express';
import Villain from '../models/villainSchema.mjs';

const router = express.Router();

//CREATE
router.post(`/`, async(reqs, resp)=>{

    try {

        const newVillain = new Villain(reqs.body);
        await newVillain.save();
        resp.json(newVillain);
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg:`Server Error`});
        
    }

});

//READ
router.get(`/`, async(reqs, resp)=>{

    try {

        const allVillains = await Villain.find({});
        resp.json(allVillains);
        
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg:`Server Error`});
        
    }

});


//UPADTE
router.put(`/:alias`, async(reqs, resp)=>{

    try {

        let updatedVillain = await Villain.findOneAndReplace({alias: reqs.params.alias}, reqs.body, {new:true});
        resp.json(updatedVillain);

        
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg:`Server Error`});
        
    }

});


//DELETE
router.delete(`/:alias`, async(reqs, resp)=>{

    try {

        await Villain.findOneAndDelete({alias: reqs.params.alias});
        resp.json({msg: `Villain ${reqs.params.alias} deleted`});
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg:`Server Error`});
        
    }

});


//Exports
export default router;