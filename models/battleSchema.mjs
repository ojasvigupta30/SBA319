import mongoose from "mongoose";

const battleSchema = new mongoose.Schema({
    location: { // Battle location
        type: String, 
        required: [true, `Location is required`] 
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
    required: [true, `Outcome is required`] 
},
universe: { //Store the universe
  type: String,
  enum: [`Marvel`, `DC`],
  required: [true, `Universe is required`]
} 
});

battleSchema.index({ location: 1 });  // Index on location
battleSchema.index({ universe: 1}); // Index on universe
battleSchema.index({ heroes: 1 });  // Index on heroes
battleSchema.index({ villains: 1 }); // Index on villains

export default mongoose.model(`Battle`, battleSchema);