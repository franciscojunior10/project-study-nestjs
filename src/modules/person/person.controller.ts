import { Body, Controller, Post } from '@nestjs/common';
import { LoggerInject, UzzeLoggerService } from '@mpgxc/logger';
import { PersonRepository } from 'src/repositories/person-repository';
import { CreatePersonBody } from 'src/dtos/create-person';

@Controller()
export class PersonController {
  constructor(
    @LoggerInject(PersonController.name)
    private logger: UzzeLoggerService,
    private personMember: PersonRepository,
  ) {}

  @Post('person')
  async create(@Body() body: CreatePersonBody) {
    const { function: functionName, name } = body;

    await this.personMember.create(name, functionName);

    this.logger.log("create > success");
  }
}
