const express = require("express");
const livroController = require('../controllers/livrosController');

const router = express.Router();

router
.get('/livros', livroController.listLivros)
.post('/livros', livroController.cadLivros)

module.exports = router;