import { Body, Controller, Post } from '@nestjs/common';
import { CreatePersonBody } from './dtos/create-person';
import { PersonRepository } from './repositories/person-repository';

@Controller()
export class AppController {
  constructor(private personMember: PersonRepository) {}

  @Post('person')
  async getHello(@Body() body: CreatePersonBody) {
    const { function: functionName, name } = body;

    await this.personMember.create(name, functionName);
  }
}
