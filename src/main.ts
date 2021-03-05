import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8087, () => {
    console.log('🔑service run successfully');
  });
}
bootstrap();
