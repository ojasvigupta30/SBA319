import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    name: { // Hero's name
        type: String,  
    },  
    alias: { // Hero's alias
        type: String, 
        required: [true, `Alias is required`],
        unique: [true, `Alias name taken`]
    },  
    power: { // A simple power field (e.g., "Flight", "Strength")
        type: String, 
        required: [true, `Power is required`] 
    },
    archNemesis: { // Store Villain's name or alias as a simple string reference
        type: String
    },
    universe: { //Store the universe        
        type: String,
        enum: [`Marvel`, `DC`],
        required: [true, `Universe is required`]
    }

});

heroSchema.index({ alias: 1 }, { unique: true });  // Unique index on alias
heroSchema.index({ universe: 1, archNemesis: 1 });  // Index on universe and arch-nemesis


export default mongoose.model(`Hero`, heroSchema);