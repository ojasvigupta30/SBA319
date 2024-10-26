//Imports
import express from 'express';
import Battle from '../models/battleSchema.mjs';

const router = express.Router();

//Validation function
function validateBattle(reqs, resp, next) {
    const { location, date, outcome, universe } = reqs.body;

    // Check if required fields are provided
    if (!location) {
        return resp.status(400).json({ msg: 'Location is required' });
    }
    if (!date) {
        return resp.status(400).json({ msg: 'Date is required' });
    }
    if (!outcome || (outcome !== `Heroes won` && outcome !== `Villains won`)) {
        return resp.status(400).json({ msg: 'Outcome must be either Heroes won or Villains won ' });
    }
    if (!universe || (universe !== 'Marvel' && universe !== 'DC')) {
        return resp.status(400).json({ msg: 'Universe must be either Marvel or DC' });
    }

    // If all validations pass, proceed to the next middleware/handler
    next();
}


//CREATE
router.post(`/`, validateBattle, async (reqs, resp) => {

    try {

        const newBattle = new Battle(reqs.body);
        await newBattle.save();
        resp.json(newBattle);


    } catch (err) {

        console.error(err);
        resp.status(500).json({ msg: `Server Error` });
        resp.status(500).json({ msg: err.msg });

    }

})

//READ
router.get(`/`, async (reqs, resp) => {

    try {

        const allBattles = await Battle.find({});
        resp.json(allBattles);


    } catch (err) {

        console.error(err);
        resp.status(500).json({ msg: `Server Error` });

    }

})

//UPADTE
router.put(`/:heroes`, validateBattle, async (reqs, resp) => {

    try {

        let updatedBattle = await Battle.findOneAndReplace({ heroes: reqs.params.heroes }, reqs.body, { new: true });
        resp.json(updatedBattle);


    } catch (err) {

        console.error(err);
        resp.status(500).json({ msg: `Server Error` });
        resp.status(500).json({ msg: err.msg });

    }

})

router.put(`/:villains`, async (reqs, resp) => {

    try {

        let updatedBattle = await Battle.findOneAndReplace({ villains: reqs.params.villains }, reqs.body, { new: true });
        resp.json(updatedBattle);


    } catch (err) {

        console.error(err);
        resp.status(500).json({ msg: `Server Error` });

    }

})

//DELETE
router.delete(`/:heroes`, async (reqs, resp) => {

    try {

        await Battle.findOneAndDelete({ heroes: reqs.params.heroes })
        resp.json({ msg: `Battle for hero ${reqs.params.heroes} deleted` })


    } catch (err) {

        console.error(err);
        resp.status(500).json({ msg: `Server Error` });

    }

})

router.delete(`/:villains`, async (reqs, resp) => {

    try {

        await Battle.findOneAndDelete({ villains: reqs.params.villains })
        resp.json({ msg: `Battle for villain ${reqs.params.villains} deleted` })


    } catch (err) {

        console.error(err);
        resp.status(500).json({ msg: `Server Error` });

    }

})

//Exports
export default router;