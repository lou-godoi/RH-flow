//importações
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Funcionario } from "../entities/funcionario.entity";
import { FuncionarioService } from "../services/funcionario.service";
import { DeleteResult } from "typeorm";

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

    @Get('/departamento/:departamento')
    @HttpCode(HttpStatus.OK)
    findByAllDepartamento(@Param('departamento')departamento: string): Promise<Funcionario[]>{
        return this.funcionarioService.findAllByDepartamento(departamento);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() funcionario: Funcionario): Promise<Funcionario> {
        return this.funcionarioService.create(funcionario);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() funcionario: Funcionario): Promise<Funcionario> {
        return this.funcionarioService.update(funcionario);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.funcionarioService.delete(id);
    }


}