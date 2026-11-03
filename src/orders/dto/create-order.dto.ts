import { IsEnum, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { orderStatus, OrderStatusList } from '../enum/order.enum.js';

export class CreateOrderDto {

  @IsNumber()
  @IsPositive()
  totalAmount!: number;
  @IsNumber()
  @IsPositive()
  totalItem!: number;

  @IsEnum(OrderStatusList, {
    message: `Possible status values are ${OrderStatusList.join(', ')}`,
  })
  @IsOptional()
  status: orderStatus = orderStatus.PENDING;
}



