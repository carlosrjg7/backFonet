import express from "express";

const route = express.Router();

import { 
  usuarios, 
  crearUsuario, 
  login, 
  confirmar, 
  recoverPassword, 
  confirmarTokenRecover,
  newPassword,
  perfil
} from '../controllers/usuariosController.mjs';

import checkAuth from './../middleware/checkAuth.mjs';

route.get('/', usuarios);
route.post('/', crearUsuario);
route.post('/login', login);
route.get('/confirmar/:token', confirmar);
route.post('/recover', recoverPassword);
route.get('/recover/:token', confirmarTokenRecover);
route.post('/recover/:token', newPassword);
route.get('/perfil', checkAuth, perfil);

export default route;