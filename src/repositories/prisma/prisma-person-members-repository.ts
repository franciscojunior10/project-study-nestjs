import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/database/prisma.service';
import { PersonRepository } from '../person-repository';

@Injectable()
export class PrismaMembersRepository implements PersonRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.person.create({
      data: {
        id: randomUUID(),
        function: memberFunction,
        name,
      },
    });
  }
}
