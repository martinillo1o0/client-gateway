import { IsEnum } from 'class-validator';
import { orderStatus, OrderStatusList } from '../enum/order.enum.js';

export class UpdateOrderStatusDto {
  @IsEnum(OrderStatusList, {
    message: `Possible status values are ${OrderStatusList.join(', ')}`,
  })
  status!: orderStatus;
}