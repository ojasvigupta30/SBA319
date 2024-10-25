//Imports
import express from 'express';
import Battle from '../models/battleSchema.mjs';

const router = express.Router();

//CREATE
router.post(`/`, async(reqs, resp)=>{

try {
    
    const newBattle = new Battle(reqs.body);
    await newBattle.save();
    resp.json(newBattle);


} catch (err) {

    console.error(err);
    resp.status(500).json({msg: `Server Error`});
    
}    

})

//READ
router.get(`/`, async(reqs, resp)=>{

    try {
        
        const allBattles = await Battle.find({});
        resp.json(allBattles);
    
    
    } catch (err) {
    
        console.error(err);
        resp.status(500).json({msg: `Server Error`});
        
    }    
    
    })

//UPADTE
router.put(`/:heroes`, async(reqs, resp)=>{

    try {
        
        let updatedBattle = await Battle.findOneAndReplace({_heroes: reqs.params.heroes}, reqs.body, {new:true});
        resp.json(updatedBattle);
    
    
    } catch (err) {
    
        console.error(err);
        resp.status(500).json({msg: `Server Error`});
        
    }    
    
    })

    router.put(`/:villains`, async(reqs, resp)=>{

        try {
            
            let updatedBattle = await Battle.findOneAndReplace({_villains: reqs.params.villains}, reqs.body, {new:true});
            resp.json(updatedBattle);
        
        
        } catch (err) {
        
            console.error(err);
            resp.status(500).json({msg: `Server Error`});
            
        }    
        
        })

//DELETE
router.delete(`/:heroes`, async(reqs, resp)=>{

    try {
        
        await Battle.findOneAndDelete({_heroes: reqs.params.heroes})
        resp.json({msg: `Battle for hero ${reqs.params.heroes} deleted`})
    
    
    } catch (err) {
    
        console.error(err);
        resp.status(500).json({msg: `Server Error`});
        
    }    
    
    })

    router.delete(`/:villains`, async(reqs, resp)=>{

        try {
            
            await Battle.findOneAndDelete({_villains: reqs.params.villains})
            resp.json({msg: `Battle for villain ${reqs.params.villains} deleted`})
        
        
        } catch (err) {
        
            console.error(err);
            resp.status(500).json({msg: `Server Error`});
            
        }    
        
        })

//Exports
export default router;