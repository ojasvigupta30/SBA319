//Imports
import express from 'express';
import Hero from '../models/heroSchema.mjs';

const router = express.Router();

//CREATE
function validateHero(reqs, resp, next) {
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


router.post(`/`, validateHero, async (reqs,resp)=>{

    try {

        const newHero = new Hero(reqs.body);
        await newHero.save();
        resp.json(newHero);

        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg: `Server Error`});
        resp.status(500).json({msg: err.msg});
        
    }

});


//READ
router.get(`/`, async (reqs,resp)=>{

    try {

        const allHeros = await Hero.find({});
        resp.json(allHeros);
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg: `Server Error`});
        
    }

});


//UPDATE
router.put(`/:alias`, validateHero, async (reqs,resp)=>{

    try {

        let updatedHero = await Hero.findOneAndReplace({ _alias: reqs.params.alias }, reqs.body, { new: true });
        resp.json(updatedHero);
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg: `Server Error`});
        resp.status(500).json({msg: err.msg});
        
    }

});


//DELETE
router.delete(`/:alias`, async (reqs,resp)=>{

    try {

        await Hero.findOneAndDelete({ _alias: reqs.params.alias });
        resp.json({msg: `Hero ${reqs.params.alias} deleted`});
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg: `Server Error`});
        
    }

});


//Exports
export default router;