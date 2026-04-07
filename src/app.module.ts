//importações
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionarioModule } from './funcionarios/funcionario.module';
import { Funcionario } from './funcionarios/entities/funcionario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_rhflow',
      entities: [Funcionario],
      synchronize: true, //permite criar e atualizar o bd automaticamente
    }),
    FuncionarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
