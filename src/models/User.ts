import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid';

//definindo as entidades
@Entity("users")
class User{
//definindo os atributos
    @PrimaryColumn()
    readonly id: string; //apenas leitura do ID
    
    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @CreateDateColumn()
    created_at: Date;

    constructor() { 
        if(!this.id) //condição de verificação do ID
            this.id = uuid()
    }

}

export {User}