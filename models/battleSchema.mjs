import mongoose from "mongoose";

const battleSchema = new mongoose.Schema({
    location: { // Battle location
        type: String, 
        required: true 
    },  
  date: { // Date of the battle
    type: Date, 
    required: true 
},  
  heroes: [{ // Store Hero names or aliases as strings
        type: String 
    }],  
  villains: [{ // Store Villain names or aliases as strings
         type: String 
        }],  
  outcome: { // Outcome of the battle
    type: String, 
    enum: ['Heroes won', 'Villains won'], 
    required: true 
}  
});



export default mongoose.model(`Battle`, battleSchema);