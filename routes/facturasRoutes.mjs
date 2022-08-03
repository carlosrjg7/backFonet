import express from "express";
import checkAuth from "../middleware/checkAuth.mjs";

const route = express.Router();

import {
  listar,
  crear,
  editar
} from './../controllers/facturasController.mjs'

route.get('/', checkAuth, listar)
route.post('/create', checkAuth, crear);
route.put('/edit/:id', checkAuth, editar);

export default route;