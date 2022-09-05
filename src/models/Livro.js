const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  id:{type: String},
  titulo:{type: String, require:true},
  autor:{type: mongoose.Schema.Types.ObjectId, ref: 'autores', require:true},
  editora:{type: String, require:true},
  paginas:{type: Number},
});

const livros = mongoose.model('livros', livroSchema);

module.exports = livros;