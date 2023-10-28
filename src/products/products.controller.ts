import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }
  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.productsService.getById(id);
  }
  @Delete('/:id')
  delete(@Param('id') id: string) {
    this.productsService.delete(id);
    return { sucess: true };
  }
}
