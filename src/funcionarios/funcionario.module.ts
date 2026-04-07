//importações
import { TypeOrmModule } from "@nestjs/typeorm";
import { Funcionario } from "./entities/funcionario.entity";
import { Module } from "@nestjs/common";

//modulo
@Module({
    imports:[TypeOrmModule.forFeature([Funcionario])],
    providers:[],
    controllers:[],
    exports:[TypeOrmModule],
})
export class FuncionarioModule{}