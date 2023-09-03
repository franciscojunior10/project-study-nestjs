import { IsNotEmpty } from 'class-validator';

export class CreatePersonBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty({
    message: 'the person function should not be empty',
  })
  function: string;
}
