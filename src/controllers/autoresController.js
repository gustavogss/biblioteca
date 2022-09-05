const autores = require("../models/Autor");

class autorController {
  static listAutores = (req, res) => {
    autores.find((error, autores) => {
      res.status(200).json(autores);
    });
  };
  static listAutorId = (req, res) => {
    const id = req.params.id;
    autores.findById(id, (error, autores) => {
      if (error) {
        res
          .status(400)
          .send({ message: `${error.message} - Id do autor não localizado` });
      } else {
        res.status(200).send(autores);
      }
    });
  };
  static cadAutores = (req, res) => {
    let autor = new autores(req.body);
    autor.save((error) => {
      if (error) {
        res
          .status(500)
          .send({ message: `${error.message} - falhar ao cadastrar o autor` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };
  static updateAutores = (req, res) => {
    const id = req.params.id;
    autores.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (!error) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };
  static deleteAutores = (req, res) => {
    const id = req.params.id;
    autores.findByIdAndDelete(id, (error) => {
      if (!error) {
        res.status(200).send({ message: "Autor foi excluído com sucesso" });
      } else {
        res.status(500).send({ message: error.message });
      }
    });
  };
}

module.exports = autorController;
