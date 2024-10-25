import mongoose from "mongoose";


const villainSchema = new mongoose.Schema({
    name: { // Villain's name
        type: String, 
        required: [true, `Name is required`] 
    },  
  alias: { // Villain's alias
    type: String, 
    required: [true, `alias is required`],
    unique: [true, `Alias is already taken`] 
},  
  power: { // A simple power field (e.g., "Mind Control")
    type: String, 
    required: [true, `Power is required`]
},  
  archNemesis: { // Store Hero's name or alias as a simple string reference
    type: String
},
universe: { //Store the universe
  type: String,
  enum: [`Marvel`, `DC`],
  required: [true, `Universe is required`]
}
    
});


export default mongoose.model(`Villain`, villainSchema);