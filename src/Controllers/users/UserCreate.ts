import { Request, Response } from "express";
import { ApiError } from "../../helpers/api-erros";
import {hash} from 'bcryptjs';
import { PrismaClient } from "@prisma/client";
require('express-async-errors');

const prisma = new PrismaClient();

class CreateUser{
    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;
        console.log('CreateUser');
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if(userAlreadyExists){
            throw new ApiError('User already exists', 400);
        }
        const passwordHash = await hash(password, 8);

        await prisma.user.create({
            data: {
                name,
                email,
                password: passwordHash
            }
        });
        
        return res.json({name, email});
    }
}

export { CreateUser }