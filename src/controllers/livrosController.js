const livros = require('../models/Livro');

class livroController {
 static listLivros = (req, res) =>{
  livros.find((error, livros)=>{
    res.status(200).json(livros);
  })
 }
}

module.exports = livroController;