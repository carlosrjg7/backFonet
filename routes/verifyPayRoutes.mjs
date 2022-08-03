import express from "express";

import { verifyPay } from './../controllers/verifyController.mjs'

const route = express.Router();

route.post('/', verifyPay);

export default route;