import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module.js';
import { ProductsModule } from './products/products.module.js';
import { OrdersModule } from './orders/orders.module.js';


@Module({
  imports: [ProductsModule, OrdersModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {




  
}
