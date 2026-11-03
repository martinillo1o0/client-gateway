

export enum orderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'

}

export const OrderStatusList = [
  orderStatus.PENDING,
  orderStatus.PROCESSING,
  orderStatus.DELIVERED,
  orderStatus.CANCELLED
]