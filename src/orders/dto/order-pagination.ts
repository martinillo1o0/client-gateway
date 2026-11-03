import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from '../../common/index.js';
import { orderStatus, OrderStatusList } from '../enum/order.enum.js';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList.join(', ')}`,
  })
  status!: orderStatus;
}