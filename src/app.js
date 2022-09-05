const express = require("express");

const db = require('./config/dbConnect');
const livros = require('./models/Livro');
const routes = require('./routes/index');

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", ()=>{
console.log('Conexão com o banco MongoDB feita com sucesso');
});

const app = express();
app.use(express.json());

routes(app);

app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
});

const buscaLivro = (id) => {
  return livros.findIndex((livro) => livro.id == id);
};

module.exports = app;
