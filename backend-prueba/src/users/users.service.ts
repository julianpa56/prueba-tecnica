import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [];

  getUsers() {
    return this.users;
  }

  saveUser(user: UserDto) {
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
      message: 'Usuario guardado exitosamente',
      user
    };
  }

  deleteUser(user: UserDto) {
    this.users = this.users.filter((u) => u.email !== user.email && u.name !== user.name);
    return { message: 'Usuario eliminado exitosamente', user };
  }
}
