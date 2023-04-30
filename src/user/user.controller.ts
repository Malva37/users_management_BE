import { UserDto } from './dto/user.dto';
import { Body, Param, Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('')
  getUsers() {
    console.log('-------------------get all-------------------');
    return this.userService.getUsers();
  }

  @Get(':id')
  getOneUser(@Param('id') id: number) {
    console.log('-------------------get by id-------------------');
    return this.userService.getById(id);
  }

  @Post('')
  createUser(@Body() dto: UserDto) {
    console.log('-------------------create-------------------');
    return this.userService.addUser(dto);
  }

  @Put('{id}')
  editUser(@Param('{id}') id: number, @Body() dto: Partial<UserDto>) {
    console.log('-------------------update-------------------');
    const user = this.userService.editUser(dto);
    console.log(user);
    return user;
  }
}
