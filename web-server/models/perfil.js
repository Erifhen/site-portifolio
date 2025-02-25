const mongoose = require('mongoose');

const PerfilSchema = new mongoose.Schema({
  fotoperfil: {
    type: String,
    required: true
  },
  tags: {
    type: [String], 
    required: true
  },
  descricaoperfil: {
    type: String, 
    required: true
  },
  logotipo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Perfil', PerfilSchema);
