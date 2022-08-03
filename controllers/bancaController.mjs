import Crypto from 'crypto-js';

const facturacion = async (req, res) => {
  
  
  //** obtener datos
  const {
    idtramite,
    tipoPago,
    total,
    status,
    idCliente,
    dni,
    detalle,
    facturas
  } = req.body
  
  const dinamic = facturas.join('|')
  // ** generar firma
  /**
   *? Datos para la firma 
    dni,
    total,
    dinamic,
    idtramite

    firmar= $apikey . $valor1 . $valor2. $valor3 . $valor4;
  */
  const firmar = `${process.env.APIKEY}${dni}${total}${dinamic}${idtramite}`
  const signature = Crypto.HmacSHA256(firmar, process.env.SECRET)

  
  /** 
   ** orden  de datos que necesito para boton de pago:
    1.dni,
    2.total,
    3.dinamic,
    4.idtramite,
    5.descripcion,
    6.apikey,
    7.firma,
   */
    const urlBanca = process.env.URL_BANCA

    const obj = {
      dni,
      total,
      dinamic,
      idtramite,
      detalle,
      apikey: process.env.APIKEY,
      firma: `${signature}`,
      urlBanca
    }


  // ** Responde la api la info para ir ala funcion del boton banesco

  return res.status(200).json(obj);
}

export {
  facturacion
}