const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Página Principal</title>
      </head>
      <body>
        <h1>bem vindo</h1>
        <p>Esta é uma página HTML simples.</p>
      </body>
    </html>
  `);
});

app.get('/api/data', (req, res) => {
  res.json({
    nome: "Nathy",
    idade: 18,
    profissao: "estudante de engenharia de software", 
  });
});

app.listen(8000, () => {
  console.log("Servidor está rodando em http://localhost:8000");
});
