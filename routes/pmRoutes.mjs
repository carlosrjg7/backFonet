import express from "express";

const route = express.Router();

import {
  paymentsMethods,
  editar,
  crearPayment,
  eliminar
} from './../controllers/pmController.mjs';

import checkAuth from "../middleware/checkAuth.mjs";

route.get('/', paymentsMethods);
route.post('/', checkAuth, crearPayment);
route.put('/edit/:id', checkAuth, editar);
route.delete('/edit/:id', checkAuth, eliminar);



export default route;
