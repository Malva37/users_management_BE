import { UserDto } from './dto/user.dto';
import { Body, Param, Controller, Get, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('')
  getUsers() {
    console.log('-------------------get all-------------------');
    return this.userService.getUsers();
  }

  @Get('')
  getOneUser(@Param('email') email: string) {
    console.log(email);
    console.log('-------------------get by email-------------------');
    return this.userService.getByEmail(email);
  }

  @Post('')
  createUser(@Body() dto: UserDto) {
    console.log('-------------------create-------------------');
    return this.userService.addUser(dto);
  }

  @Patch('')
  editUser() {
    console.log('-------------------update-------------------');
    return this.userService.editUser();
  }
}
