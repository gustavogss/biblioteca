const express = require("express");
const livroController = require("../controllers/livrosController");

const router = express.Router();

router
  .get("/livros", livroController.listLivros)
  .get("/livros/:id", livroController.listLivroId)
  .post("/livros", livroController.cadLivros)
  .put("/livros/:id", livroController.updateLivros)
  .delete("/livros/:id", livroController.deleteLivros);

module.exports = router;
