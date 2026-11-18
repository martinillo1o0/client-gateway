import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from '../config/envs.js';
import { CATEGORY_SERVICE } from '../config/service.js';
import { CategoriesController } from './categories.controller.js';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CATEGORY_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.categoriesMicroserviceHost,
          port: envs.categoriesMicroservicePort,
        },
      },
    ]),
  ],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
