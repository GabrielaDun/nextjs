import { IsInt, IsNotEmpty, Length, IsString, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 30)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => {
    console.log('Original Value:', value);
    const transformed = parseInt(value, 10);
    console.log('Transformed Value:', transformed);
    return transformed;
  })
  price: number;

  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  description: string;
}
