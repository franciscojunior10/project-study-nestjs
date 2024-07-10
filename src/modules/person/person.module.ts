import { Module } from "@nestjs/common";
import { PersonController } from "./person.controller";
import { PrismaService } from "src/database/prisma.service";
import { PersonRepository } from "src/repositories/person-repository";
import { PrismaMembersRepository } from "src/repositories/prisma/prisma-person-members-repository";
import { LoggerModule } from "@mpgxc/logger";

@Module({
  imports: [LoggerModule.forRoot()],
  controllers: [PersonController],
  providers: [
    PrismaService,
    {
      provide: PersonRepository,
      useClass: PrismaMembersRepository,
    },
  ],
})

export class PersonModule {}