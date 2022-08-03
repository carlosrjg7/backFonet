import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const verifyPay = async (req, res) => {
  const respBanco = req.body;

/*   {
    "estatus": "1",
    "referencia": "11690005036", ----- número de referencia de pago del banco
    "valor4": "XXXXX-6844498", ----- ID de la transacción
    "firma": "867621528", 
     "fecha_pago": "25/05/2021 02:25:10PM",
     "id_banco_origen": "0134",
     "valor1": "V17158959", ------ cedula del pagador
     "valor2": "125.25", ------ monto del trámite
     "moneda": "VES", ------ código de la moneda de pago
     "valor3": “xx|yyyyyy|zzzzzzz”, ------ campo dinámico.
     "valor5": "PRUEBA BOTON 0123456789404", ----- descripción del pago
  }
 */

  const {
    estatus,
    referencia,
    valor4,
    firma,
    fecha_pago,
    id_banco_origen,
    valor1,
    valor2,
    moneda,
    valor3,
    valor5,
  } = respBanco

  const pago = await prisma.pago.update({
    where: {
      idTramite: parseInt(valor4) 
    },
    data: {
      referencia,
      statusBanco: estatus
    }
  }) ;

  res.status(200).json(pago);
}

export {
  verifyPay
}