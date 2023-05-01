import { UserDto } from './dto/user.dto';
import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return this.userService.getById(+id);
  }

  @Post('')
  createUser(@Body() dto: UserDto) {
    return this.userService.addUser(dto);
  }

  @Put(':id')
  editUser(@Param('id') id: string, @Body() dto: UserDto) {
    return this.userService.editUser(+id, dto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}
