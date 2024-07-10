import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PersonRepository } from './repositories/person-repository';
import { PrismaMembersRepository } from './repositories/prisma/prisma-person-members-repository';
import { LoggerModule } from '@mpgxc/logger';

@Module({
  imports: [LoggerModule.forRoot()],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: PersonRepository,
      useClass: PrismaMembersRepository,
    },
  ],
})
export class AppModule {}
