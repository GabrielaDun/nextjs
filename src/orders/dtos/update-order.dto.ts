import { IsNotEmpty, Length, IsString, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 30)
  client: string;

  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  address: string;
}
