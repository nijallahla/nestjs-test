import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Remove "X-Powered-By" header from response
  app.disable('x-powered-by');

  app.enableCors({
    origin: 'http://example.com',
    methods: '*',
    preflightContinue: true,
    credentials: true,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  await app.listen(3000);
}
bootstrap();
