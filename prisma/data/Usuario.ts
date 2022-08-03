import { Rol } from '@prisma/client';

const usuarios = {
  name: 'Carlos',
  lastname: 'Garcia',
  email: 'carlosrjg7@gmail.com',
  password: '1234',
  status: 1,
  role: Rol.ADMIN
}

export {
  usuarios
}