const livros = require('../models/Livro');

class livroController {
 static listLivros = (req, res) =>{
  livros.find((error, livros)=>{
    res.status(200).json(livros);
  })
 }
 static cadLivros = (req, res) =>{
  let livro = new livros(req.body);
  livro.save((error)=>{
    if (error){
      res.status(500).send({message: `${error.message} - falhar ao cadastrar o livro`})
    } else{
      res.status(201).send(livro.toJSON());
    }
  })
 }
}

module.exports = livroController;