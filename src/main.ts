import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const ip = '192.168.100.10'
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, ip);
}
bootstrap();
