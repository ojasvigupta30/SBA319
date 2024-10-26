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

villainSchema.index({ alias: 1 }, { unique: true });  // Unique index on alias
villainSchema.index({ universe: 1, archNemesis: 1 });  // Index on universe and arch-nemesis

export default mongoose.model(`Villain`, villainSchema);