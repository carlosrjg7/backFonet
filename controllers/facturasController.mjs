import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const listar = async (req, res) => {
  const facs = await prisma.factura.findMany({
    include: {
      Cliente: {
        select:{
          fullname: true
        }
      }
    }
  })

  console.log(facs);
  res.json(facs);
}

const crear = async (req, res) => {
  const fac = req.body;

  try {

    const facura = await prisma.factura.create({
      data: {
        ...fac
      }
    });

    res.json(facura);
    
  } catch (error) {
    console.log(error);
  }
}

const editar = async (req, res) => {
  const { id } = req.params;
  const fac = req.body;

  try {
    const factura = await prisma.factura.update({
      where: {
        id: parseInt(id) 
      },
      data: {
        ...fac
      }
    }) ;

    res.json(factura);
    
  } catch (error) {
    console.log(error);
  }
}

export {
  listar,
  crear,
  editar
 };