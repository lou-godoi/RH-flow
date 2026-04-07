//importações
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

//função de inicialização
async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  process.env.TZ = '-03:00' //fuso horário
  app.useGlobalPipes(new ValidationPipe()); 
  app.enableCors(); //permite as requisições
  await app.listen(process.env.PORT ?? 3000); //porta padrão nest

}
bootstrap();
