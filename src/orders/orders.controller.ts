import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { UpdateOrderDTO } from './dtos/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}
  @Get('/')
  getAll(): any {
    return this.orderService.getAll();
  }
  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.orderService.getById(id))
      throw new NotFoundException('Order not found');
    return this.orderService.getById(id);
  }
  @Delete('/:id')
  delete(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.orderService.getById(id))
      throw new NotFoundException('Order not found');
    this.orderService.delete(id);
    return { sucess: true };
  }
  @Post('/')
  create(@Body() orderData: CreateOrderDTO) {
    return this.orderService.create(orderData);
  }
  @Put('/:id')
  edit(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() orderData: UpdateOrderDTO,
  ) {
    if (!this.orderService.getById(id))
      throw new NotFoundException('Order not found');
    this.orderService.edit(id, orderData);
    return { sucess: true };
  }
}
