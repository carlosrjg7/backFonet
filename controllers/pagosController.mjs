import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const listar = async (req, res) => {
  const pagos = await prisma.pago.findMany()
  res.json(pagos);
}

const crear = async (req, res) => {
  const pago = req.body;

  try {

    const {
      tipo,
      total,
      detalle,
      idCliente,
      facturas,
      idtramite,
      referencia,
    } = pago

    const obj = {
      tipo,
      total,
      detalle,
      idCliente,
      idtramite,
      referencia,
    }

    const pay = await prisma.pago.create({
      data: {
        ...obj
      }
    });

    // TODO: luego actualizar las facturas con el id de pago

    res.status(200).json(pay);
    
  } catch (error) {
    console.log(error);
  }
}

const editar = async (req, res) => {
  const { id } = req.params;
  const pay = req.body;

  try {
    const pago = await prisma.pago.update({
      where: {
        id: parseInt(id) 
      },
      data: {
        ...pay
      }
    }) ;

    res.json(pago);
    
  } catch (error) {
    console.log(error);
  }
}

export {
  listar,
  crear,
  editar
 };