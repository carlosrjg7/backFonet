import express from "express";
import checkAuth from "../middleware/checkAuth.mjs";

const route = express.Router();

import {
  listar,
  crear,
  editar
} from './../controllers/pagosController.mjs'

route.get('/', checkAuth, listar)
route.post('/', crear);
route.put('/edit/:id', checkAuth, editar);

export default route;