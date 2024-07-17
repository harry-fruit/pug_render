const express = require("express");
const path = require("path");
const moment = require("moment");

const app = express();
const port = 5000;
const pugName = "index"
const pugParams = {
  IndividualFirstName: "John Connor",
  Account: {
    Id: 123,
    UniqueCode: "Conta_Test"
  },
  Histories: [
    {
      ContaUniqueCode: "Conta_Test",
      HistoricoSituacao: "3",
      HistoricoVencimento: "20/08/2024",
      HistoricoDataCriacao: "2024-07-04 16:45:47.577",
      HistoricoCriadoPor: "Isaque D",
      HistoricoDescricao: "Teste de históricoTeste de históricoTeste de históricoTeste de históricoTeste de históricoTeste de históricoTeste de históricoTeste de históricoTeste de históricoTeste de históricoTeste de históricoTeste de históricoTeste de históricoTeste de histórico"
    },
  ] 
}

// Configura o Express para usar o Pug como mecanismo de template
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Define a rota principal
app.get("/", (req, res) => {

  const paramsToRender = {
    moment,
    ...pugParams
  };

  res.render(pugName, paramsToRender);

});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}, acesse a rota '/' para visualizar o pug`);
});
