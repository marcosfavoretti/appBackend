import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicrosoftToken } from './MicrosoftToken/Microsoft.token';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  await app.listen(3000);
}
bootstrap();
