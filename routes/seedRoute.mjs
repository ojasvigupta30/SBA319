import express from 'express';
import Hero from '../models/heroSchema.mjs';
import heroes from '../data/heroes.mjs';
import Villain from '../models/villainSchema.mjs';
import villains from '../data/villains.mjs';
import Battle from '../models/battleSchema.mjs';
import battles from '../data/battles.mjs';

const router = express.Router();



router.get(`/seed`, async (reqs, resp)=>{

    //Optional step to erase the database first
    await Battle.deleteMany({});
    await Hero.deleteMany({});
    await Villain.deleteMany({});
    

    //create items in database
await Hero.create(heroes);
await Villain.create(villains);
await Battle.create(battles);

resp.send(`Seeding Database`);

});

export default router;