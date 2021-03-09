import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //设置允许跨域s
  await app.listen(8087, () => {
    console.log('🌝 service run successfully');
  });
}
bootstrap();
