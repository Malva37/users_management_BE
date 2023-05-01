import { UserDto } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getUsers() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async getById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async addUser(dto: UserDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        secondName: dto.secondName,
        email: dto.email,
        dateOfBirth: dto.dateOfBirth,
      },
    });

    return user;
  }

  async editUser(id, dto: UserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: dto,
    });
  }

  async deleteUser(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
