import express from "express";

const app = express();

/**
 * GET      => BUSCAR UMA INFORMAÇÃO
 * POST     => INSERIR (CRIAR) UMA INFORMAÇÃO
 * PUT      => ALTERAR UMA INFORMAÇÃO
 * DELETE   => REMOVER UM DADO
 * PATCH    => ALTERAR UMA INFORMAÇÃO ESPECÍFICA
 */
app.get("/test", (_req, res) => {
  res.send("Olá Yuri!");
});

app.post("/test-post", (_req, res) => {
  res.send("Olá, Yuri!Tá querendo postar oq?");
});

app.listen(3000, () => console.log("Server is running"));
