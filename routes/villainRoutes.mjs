//Imports
import express from 'express';
import Villain from '../models/villainSchema.mjs';

const router = express.Router();

//CREATE
function validateVillain(reqs, resp, next) {
    const { alias, power, universe } = reqs.body;
  
    // Check if required fields are provided
    if (!alias) {
      return resp.status(400).json({ msg: 'Alias is required' });
    }
    if (!power) {
      return resp.status(400).json({ msg: 'Power is required' });
    }
    if (!universe || (universe !== 'Marvel' && universe !== 'DC')) {
      return resp.status(400).json({ msg: 'Universe must be either Marvel or DC' });
    }
  
    // If all validations pass, proceed to the next middleware/handler
    next();
  }

router.post(`/`, validateVillain, async(reqs, resp)=>{

    try {

        const newVillain = new Villain(reqs.body);
        await newVillain.save();
        resp.json(newVillain);
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg:`Server Error`});
        resp.status(500).json({msg: err.msg});
        
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
router.put(`/:alias`, validateVillain, async(reqs, resp)=>{

    try {

        let updatedVillain = await Villain.findOneAndReplace({alias: reqs.params.alias}, reqs.body, {new:true});
        resp.json(updatedVillain);

        
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg:`Server Error`});
        resp.status(500).json({msg: err.msg});
        
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