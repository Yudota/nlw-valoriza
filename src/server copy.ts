import express from "express";

// @types/express -D
const app = express();

/**
 * 
 * GET    => Buscar uma informação
 * POST   => Inserir/Criar uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover uma informação
 * PATCH  => Alterar uma informação específica
 */

/**
 * Tipos de parâmetros
 *  Routes Params => http://localhost:3000/produtos/783452854125
 * Query Params => http://localhost:300/produtos?name=teclado&description=tecladobom
 * Body Params => {
 * "name": "teclado",
 * "description": "teclado bom"
 * }
*/



app.get("/test/{id}", (request, response) => {
    const id = request.params.id;
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));