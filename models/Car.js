const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
  brand: {
    type: String
  },
  model: {
    type: String
  },
  year: {
    type: Number,
    default: 18
  }
}, {
  // timestamps va créer automatiquement sans qu'on
  // ait a le spécifier les clés `createdAt` et `updatedAt`
  timestamps: true
})

// c'est ici que mongoose fait le lien entre collection et schema
// cette ligne va créer la collection `student` avec le schema `studentSchema`
const Car = mongoose.model('Car', carSchema)

module.exports = Car