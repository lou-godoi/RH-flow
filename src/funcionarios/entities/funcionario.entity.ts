//importações
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

//classe funcionario
@Entity({name: "tb_funcionario"})
export class Funcionario{
    
    //atributos
    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({length:100, nullable:false})
    nome!: string;

    @IsNotEmpty()
    @Column({type: 'decimal', precision: 7, scale: 2, nullable:false, }) //2 casas depois da virgula e um total de 7 digitos
    salario!: number;

    @IsNotEmpty()
    @Column({length:50, nullable:false})
    departamento!: string;

    @IsNotEmpty()
    @Column({length:50, nullable:false})
    cargo!: string;
}