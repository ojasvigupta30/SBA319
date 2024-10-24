import mongoose from "mongoose";


const villainSchema = new mongoose.Schema({
    name: { // Villain's name
        type: String, 
        required: true 
    },  
  alias: { // Villain's alias
    type: String, 
    required: true 
},  
  power: { // A simple power field (e.g., "Mind Control")
    type: String, 
    required: true 
},  
  archNemesis: { // Store Hero's name or alias as a simple string reference
    type: String
}
    
});


export default mongoose.model(`Villain`, villainSchema);