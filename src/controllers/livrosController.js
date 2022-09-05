const livros = require("../models/Livro");

class livroController {
  static listLivros = (req, res) => {
    livros
      .find()
      .populate("autor")
      .exec((error, livros) => {
        res.status(200).json(livros);
      });
  };
  static listLivroId = (req, res) => {
    const id = req.params.id;
    livros
      .findById(id)
      .populate("autor", "name")
      .exec((error, livros) => {
        if (error) {
          res
            .status(400)
            .send({ message: `${error.message} - Id do livro não localizado` });
        } else {
          res.status(200).send(livros);
        }
      });
  };
  static cadLivros = (req, res) => {
    let livro = new livros(req.body);
    livro.save((error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - falhar ao cadastrar o livro` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };
  static updateLivros = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };
  static deleteLivros = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (error) => {
      if (!error) {
        res.status(200).send({ message: "Livro foi excluído com sucesso" });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };
}

module.exports = livroController;
