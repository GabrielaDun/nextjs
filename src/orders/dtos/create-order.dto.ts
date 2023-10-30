import { IsNotEmpty, Length, IsString, IsUUID } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 30)
  client: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  address: string;
}
