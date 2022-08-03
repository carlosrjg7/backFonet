import Express from "express";
import usuarioRoutes from './routes/usuarioRoutes.mjs'
import clientsRoutes from './routes/clientsRoutes.mjs'
import pmRoutes from './routes/pmRoutes.mjs'
import external from './routes/externalApi.mjs'
import pagosRoutes from './routes/pagosRouter.mjs'
import facturasRoutes from './routes/facturasRoutes.mjs'
import bancaRoutes from './routes/bancaRouter.mjs'
import verifyPayRoutes from './routes/verifyPayRoutes.mjs'
import cors from 'cors'

const app = Express();

app.use(Express.json());

/* const whitelist = [
  process.env.FRONTEND_URL,
  "http://localhost:3000/",
  "http://localhost:3001"
];

const corsOptions = {
  origin: function(origin, callback) {
    if(whitelist.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error("Error de cors"));
    }
  }
}

app.use(cors(corsOptions)); */

app.use(cors());

app.use("/api/users", usuarioRoutes);

app.use("/api/clients", clientsRoutes);

app.use("/api/pm", pmRoutes);

app.use("/api/pagos", pagosRoutes);

app.use("/api/factura", facturasRoutes);

app.use("/api/external", external);

app.use("/api/facturacion", bancaRoutes)

app.use("/api/verify", verifyPayRoutes)


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
})