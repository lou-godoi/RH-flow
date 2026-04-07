//importações
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { Funcionario } from "../entities/funcionario.entity";
import { DeleteResult } from "typeorm/browser";

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

    async findAllByDepartamento(departamento: string): Promise<Funcionario[]>{
        return await this.funcionarioRepository.find({
            where:{
                departamento: ILike(`%{departamento}%`)
            }
        })
    }

    async create(funcionario: Funcionario): Promise<Funcionario> {
        return await this.funcionarioRepository.save(funcionario);
    }

    async update(funcionario: Funcionario): Promise<Funcionario> {

        await this.findById(funcionario.id);

        return await this.funcionarioRepository.save(funcionario);
    }

    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);

        return await this.funcionarioRepository.delete(id);
    }
}
