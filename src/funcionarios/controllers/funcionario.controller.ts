//importações
import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Funcionario } from "../entities/funcionario.entity";
import { FuncionarioService } from "../services/funcionario.service";

// controlador para a entidade Funcionario funcionar
@Controller("/funcionario")
export class FuncionarioController {
    constructor(private readonly funcionarioService: FuncionarioService) { }

    // métodos

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Funcionario[]> {
        return this.funcionarioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Funcionario> {
        return this.funcionarioService.findById(id);
    }

}