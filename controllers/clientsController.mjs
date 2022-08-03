import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const clientes = async (req, res) => {
  const clients = await prisma.cliente.findMany()
  res.json(clients);
}

const clientesCount = async (req, res) => {
  const clients = await prisma.cliente.count();
  res.json(clients);
}


const crear = async (req, res) => {

  const { email } = req.body;

    const existeCliente = await prisma.cliente.findFirst({
      where: {
        email
      }
    });

    if(existeCliente){
      const error = new Error("Ya existe un cliente registrado con el mismo email.");
      return res.status(404).json({ msg: error.message });
    }

   try {
    const data = req.body;
    const cliente = await prisma.cliente.create({
      data: {
        ...data
      }
    });

    res.json(cliente);

   } catch (error) {
      console.log(error)
   }
}

const editar = async (req , res) => {

  const client = req.body;

  try {
    const clienteup = await prisma.cliente.update({
      where: {
        id: client.id
      },
      data: {
        ...client
      }
    })

    res.json(clienteup);

  } catch (error) {
    console.log(error);
  }

}

const eliminar = async (req, res) => {
  const id = req.body;

  try {
    const eliminado = await prisma.cliente.update({
      where: {
        id
      },
      data: {
        status: false
      }
    })

    res.json(eliminado);
    
  } catch (error) {
    console.log(error);
  }
}



export {
  clientes,
  clientesCount,
  crear,
  editar,
  eliminar,
};