import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { envs } from './config/envs.js';
import { Logger, ValidationPipe } from '@nestjs/common';
import { RpcCustomExceptionFilter } from './common/exception/rpc-exception.filter.js';

async function bootstrap() {
  const logger = new Logger("Main-Gateway");
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,

    },)
  )
app.useGlobalFilters(new RpcCustomExceptionFilter());
app.setGlobalPrefix('api');
  await app.listen(envs.port);
  logger.log(`Gateway runnig on PORT ${envs.port}`);


}
await bootstrap();
