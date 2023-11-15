import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicrosoftToken } from './MicrosoftToken/Microsoft.token';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  const ip = "192.168.100.10"//mude para seu ip da rede interna
  await app.listen(3000, ip);
}
bootstrap();
