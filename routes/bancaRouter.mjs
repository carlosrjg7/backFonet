import express from "express";

const route = express.Router();

import {
  facturacion
} from './../controllers/bancaController.mjs'

route.post('/', facturacion);

export default route;