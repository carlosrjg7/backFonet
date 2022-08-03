import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import extNameLast from './../helpers/getNameLast.mjs';

const prisma = new PrismaClient();

const consultarFacturas = async (req, res) =>{
  const { email, cedula } = req.params;

  let cliente_id;

  try {
    const response = await axios.post(`${process.env.URL_API_EXTERNAL}/api/GetFacturas?Email=${email}&Cedula=${cedula}`);
    const { data } = response;
    console.log(data);

    if(!data.resp){
      const error = new Error("Cliente no encontrado.");
      return res.status(404).json({msg: error.message});
    }

    if(Object.entries(data.facturas).length === 0){
      const error = new Error("No posee facturas asociadas.");
      return res.status(404).json({msg: error.message});
    }
    
    const existeCliente = await prisma.cliente.findFirst({
      where: {
        email
       }
     });

    if(!existeCliente){

      const  { nombre, 
               direccion_principal, 
               telefono, 
               movil, 
               estado, 
               codigo,
               correo,
               id,
              } = data.clienteFonet.datos[0];

      const nombres = extNameLast(nombre);

      const cliente = {
        dni: cedula,
        idFonetCliente: id,
        email: correo,
        name: nombres.name,
        lastname: nombres.lastname,
        fullname: nombre,
        dir: direccion_principal,
        telefono,
        movil,
        codigo,
        estado
      } 

      console.log('cliente', cliente.email);

      const clienteNew = await prisma.cliente.create({
        data: {
          ...cliente
        }
      });
      cliente_id = clienteNew.id;
      //console.log(clienteNew);
    }

    const datosFacturas = data.facturas.facturas;
    console.log('----------------------------');
    console.log(datosFacturas);

    datosFacturas.map( async (item) => {

      const factura = {
        idFonetFactura: parseInt(item.id),
        monto: parseFloat(item.total),
        estado: item.estado,
        impuesto: parseFloat(item.impuesto),
        emitido: item.emitido,
        vencimiento: item.vencimiento,
        idFonetClienteFact: parseInt(item.idcliente),
        clienteId: cliente_id
      }

      try {

        
        const facturas = await prisma.factura.upsert({
          where: {
            idFonetFactura: factura.idFonetFactura
          },
          update: {},
          create: {
            ...factura
          }
        });

        //console.log(facturas);

      } catch (error) {
        console.log(error)
      }

    })
    
    res.json(data);

  } catch (error) {
    console.log(error)
  }
}

const consultaCliente = async (req, res) => {
  const { correo, cedula } = req.body;
  let idClienteFonet;
  let cliente_id;
  let cliente;
  try {

    const obj = {
      token: process.env.FONET_TOKEN,
      cedula,
      correo: correo,
    }

    const { data } = await axios.post(`${process.env.URL_FONET}/api/v1/GetClientsDetails`, obj)
    
    console.log(data);
    if(data.estado === 'error'){
      const error = new Error("No existe el cliente con la cedula indicada.");
      return res.status(404).json({ msg: error.message})
    }

    const existeCliente = await prisma.cliente.findFirst({
      where: {
        email: correo
      }
    });

    if(!existeCliente){

      const  { nombre, 
               direccion_principal, 
               telefono, 
               movil, 
               estado, 
               codigo,
               id,
              } = data.datos[0];

      idClienteFonet = id

      const nombres = extNameLast(nombre);

      const cliente = {
        dni: cedula,
        idFonetCliente: id,
        email: correo,
        name: nombres.name,
        lastname: nombres.lastname,
        fullname: nombre,
        dir: direccion_principal,
        telefono,
        movil,
        codigo,
        estado
      } 

      const clienteNew = await prisma.cliente.create({
        data: {
          ...cliente
        }
      });

      cliente = clienteNew;
      cliente_id = clienteNew.id;
    }else{
      cliente_id =  existeCliente.id
      cliente = existeCliente
    }

    console.log('--------------******---------------');

    const fact = data.datos[0].facturacion

    if(parseInt(fact.facturas_nopagadas) > 0){

      ///api/v1/GetInvoices
      const obj = {
        token: process.env.FONET_TOKEN,
        estado: 1,
        idcliente: idClienteFonet
      }
      const resp = await axios.post(`${process.env.URL_FONET}/api/v1/GetInvoices`, obj)
      const facturas = resp.data.facturas

      console.log('--------------facturas---------------');
      console.log(facturas);

      //map
      facturas.map( async (item) => {

        const factura = {
          idFonetFactura: parseInt(item.id),
          monto: parseFloat(item.total),
          estado: item.estado,
          impuesto: parseFloat(item.impuesto),
          emitido: item.emitido,
          vencimiento: item.vencimiento,
          idFonetClienteFact: parseInt(item.idcliente),
          clienteId: cliente_id
        }
  
        try {

          const facturas = await prisma.factura.upsert({
            where: {
              idFonetFactura: factura.idFonetFactura
            },
            update: {},
            create: {
              ...factura
            }
          });
  
        } catch (error) {
          console.log(error)
        }

      })
      return res.status(200).json({cliente,facturas})
    }
    
  } catch (error) {
    console.log(error);
  }
}


export {
  consultarFacturas,
  consultaCliente
}