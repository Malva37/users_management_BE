import { UserDto } from './dto/user.dto';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getUsers() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async getByEmail(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }

    return user;
  }

  async addUser(dto: UserDto) {
    try {
      const user = await this.prisma.user.create({
        data: {
          name: dto.name,
          secondName: dto.secondName,
          email: dto.email,
          date: dto.date,
        },
      });

      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async editUser() {
    return 'you are changing user';
  }
}