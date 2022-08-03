import express from "express";

const route = express.Router();

import {
  clientes,
  clientesCount,
  crear,
  editar,
  eliminar,
} from './../controllers/clientsController.mjs';

import checkAuth from "../middleware/checkAuth.mjs";

route.get('/', checkAuth, clientes);
route.get('/count', checkAuth, clientesCount);
route.post('/', checkAuth, crear);
route.put('/editar', checkAuth, editar);
route.post('/eliminar', checkAuth, eliminar);

export default route;