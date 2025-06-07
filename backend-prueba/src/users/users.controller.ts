import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('')
export class UsersController {
  usersService: UsersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  @Get('/users')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('/users')
  saveUser(@Body() userDto: UserDto) {
    return this.usersService.saveUser(userDto);
  }

  @Delete('/users')
  deleteUser(@Body() userDto: UserDto) {
    return this.usersService.deleteUser(userDto);
  }
}
