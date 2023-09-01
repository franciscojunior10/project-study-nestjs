import { Controller, Get } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('person')
  async getHello() {
    const person = await this.prisma.person.create({
      data: {
        id: randomUUID(),
        function: 'teste',
        name: 'Francisco Júnior',
      },
    });

    return {
      message: person,
    };
  }
}
