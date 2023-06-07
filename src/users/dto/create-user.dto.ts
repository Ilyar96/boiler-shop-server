import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Ivan' })
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'Qwerty123' })
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'ivan@gmail.com' })
  readonly email: string;
}
