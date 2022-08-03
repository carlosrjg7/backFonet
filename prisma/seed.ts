//import { usuarios } from "./data/Usuario";
import { paymethods } from "./data/PayMethod";
import { PrismaClient } from '@prisma/client';

const prisma =  new PrismaClient()

const main = async (): Promise<void> => {
  try{
    
/*     await prisma.usuario.createMany({
      data: usuarios
    }) */

    await prisma.payMethod.createMany({
      data: paymethods
    })

  } catch (error) {
    console.log(error)
  }
}

main()