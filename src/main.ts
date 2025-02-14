import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express'; // Express import qilish kerak

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // DTO validatsiyasi
  app.useGlobalPipes(new ValidationPipe());

  // `/uploads/` ni ochish
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  app.enableCors({
    origin: '*', // Hamma joydan so‘rov qilishga ruxsat
    methods: 'GET,POST,PUT,DELETE',
  });

  await app.listen(3033);
}
bootstrap();
