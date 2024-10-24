import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    name: { // Hero's name
        type: String, 
        required: true 
    },  
    alias: { // Hero's alias
        type: String, 
        required: true 
    },  
    power: { // A simple power field (e.g., "Flight", "Strength")
        type: String, 
        required: true 
    },
    archNemesis: { // Store Villain's name or alias as a simple string reference
        type: String
    } 

});




export default mongoose.model(`Hero`, heroSchema);