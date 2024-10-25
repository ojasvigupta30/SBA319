//Imports
import express from 'express';
import Hero from '../models/heroSchema.mjs';

const router = express.Router();

//CREATE
router.post(`/`, async (reqs,resp)=>{

    try {

        const newHero = new Hero(reqs.body);
        await newHero.save();
        resp.json(newHero);

        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg: `Server Error`});
        
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
router.put(`/:alias`, async (reqs,resp)=>{

    try {

        let updatedHero = await Hero.findOneAndReplace({ _alias: reqs.params.alias }, reqs.body, { new: true });
        resp.json(updatedHero);
        
    } catch (err) {

        console.error(err);
        resp.status(500).json({msg: `Server Error`});
        
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