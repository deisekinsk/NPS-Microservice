import "reflect-metadata";
import express, { request, response } from 'express';
import "./database";
import { router } from "./routes";

const app = express();

//GET(Buscar), POST(Salvar), PUT(Alterar), DELETE, PATCH(Alteração Específica)

app.use(express.json());//habilitar a leitura de JASON

app.use(router);

//Check the server
app.listen(3333, () => console.log("Server ir running"));

