const express = require("express");

const db = require("./config/dbConnect");
const livros = require("./models/Livro");
const routes = require("./routes/index");

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco MongoDB feita com sucesso");
});

const app = express();
app.use(express.json());

routes(app);

module.exports = app;
