import express from "express";

const route = express.Router();

import { 
  consultarFacturas,
  consultaCliente
} from './../controllers/externalApiController.mjs'

route.get('/:email/:cedula', consultarFacturas);

route.post('/cliente/', consultaCliente);


export default route;