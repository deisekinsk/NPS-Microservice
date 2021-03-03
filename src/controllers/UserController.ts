import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import {User} from "../models/User";


class UserController {

    async create(request: Request, response: Response){
        //desestruturação dos dados
        const {name, email} = request.body;
        
        //criação de repositório | comunicação com o banco de dados
        
        const userRepository = getRepository(User);
        //Em BD seria 'select from * users where email = "email"
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if (userAlreadyExists){
            return response.status(400).json({
                error: "User already exists!",
                
            })
        }

        const user = userRepository.create({
            name, email
        });

        await userRepository.save(user);

        return response.json(user);
    }
}

export { UserController}