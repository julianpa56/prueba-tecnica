import { BadRequestException, Injectable, Response } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];

  getUsers() {
    return this.users;
  }

  saveUser(user: UserDto) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user.name || !user.email) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Error al guardar el usuario',
        cause: 'El nombre y el email son obligatorios',
      });
      
    }
    if (!emailRegex.test(user.email)) {
      throw new BadRequestException({
      statusCode: 400,
      message: 'Error al guardar el usuario',
      cause: 'El email no tiene un formato válido',
      });
    }

    const userExists = this.users.find((u) => u.email === user.email);

    if (userExists) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Error al guardar el usuario',
        cause: 'Un usuario con el mismo email ya existe',
      });
    }

    this.users.push(user);
    return {
      statusCode: 201,
      message: 'Usuario guardado exitosamente'
    };
  }

  deleteUser(user: UserDto) {

    if (!user.email || !user.name) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Error al eliminar el usuario',
        cause: 'El nombre y el email son obligatorios',
      });
    }
    const userExists = this.users.find((u) => u.email === user.email && u.name === user.name);
    if (!userExists) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Error al eliminar el usuario',
        cause: 'El usuario no existe',
      });
    }
      
      this.users = this.users.filter((u) => !(u.email === user.email && u.name === user.name));

      return { message: 'Usuario eliminado exitosamente', user };
  }
}
