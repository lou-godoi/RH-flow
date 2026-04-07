//importações
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Funcionario } from "../entities/funcionario.entity";

@Injectable()
export class FuncionarioService{
    constructor(
        @InjectRepository(Funcionario) 
        private funcionarioRepository: Repository<Funcionario>  
    ){}

    //funçao que retorna todos funcionarios e suas informações
    async findAll(): Promise <Funcionario[]> {
        return await this.funcionarioRepository.find();
    }

    async findById(id: number): Promise<Funcionario> {

        const funcionario = await this.funcionarioRepository.findOne({
            where: {
                id
            }
        });

        if (!funcionario)
            throw new HttpException('Funcionário não encontrado!', HttpStatus.NOT_FOUND);

        return funcionario;
    }
}
