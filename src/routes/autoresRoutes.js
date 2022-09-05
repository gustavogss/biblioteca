const express = require("express");
const autoresController = require("../controllers/autoresController");

const router = express.Router();

router
  .get("/autores", autoresController.listAutores)
  .get("/autores/:id", autoresController.listAutorId)
  .post("/autores", autoresController.cadAutores)
  .put("/autores/:id", autoresController.updateAutores)
  .delete("/autores/:id", autoresController.deleteAutores);

module.exports = router;
