import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const paymentsMethods = async (req, res) => {
  const payments = await prisma.payMethod.findMany({
    where:{
      status: true
    }
  })
  res.json(payments);
}

const crearPayment = async (req, res) => {
  const pay = req.body;

  try {
    const payment = await prisma.payMethod.create({
      data: {
        ...pay
      }
    });

    res.json(payment);
  } catch (error) {
    console.log(error);
  }
}

const editar =  async (req, res) => {
  const { id } = req.params;
  const paym = req.body;

  try {
    const paymts = await prisma.payMethod.update({
      where: {
        id: parseInt(id) 
      },
      data: {
        ...paym
      }
    }) ;

    res.json(paymts);
    
  } catch (error) {
    console.log(error);
  }
}

const eliminar = async (req, res) => {
  const { id } = req.params;

  try {
    const payDel = await prisma.payMethod.delete({
      where:{
        id: parseInt(id) 
      }
    });

    res.json(payDel);
  } catch (error) {
    console.log(error);
  }
}

export {
  paymentsMethods,
  editar,
  crearPayment,
  eliminar
 };