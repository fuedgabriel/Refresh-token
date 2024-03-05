import { ApiError } from '../../helpers/api-erros';
import {client} from '../../prisma/client';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import { GenerateRefreshToken } from '../../provider/generateRefreshToken';
import { GenerateTokenProvider } from '../../provider/generateTokenProvider';
require('express-async-errors');

class UserAuthenticate {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;
        const userAlreadyExists = await client.user.findUnique({
            where: {
                email
            }
        });
        if(!userAlreadyExists){
            console.log("entou");
            throw new ApiError('Email or password incorrect', 200);
        }
        const passwordMatch = await compare(password, userAlreadyExists.password);
        if(!passwordMatch){
            console.log("entou");
            throw new ApiError('Email or password incorrect', 200);
        }

        await client.refreshToken.deleteMany({
            where: {
                userId: userAlreadyExists.id
            }
        });

        //gerar token
        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(userAlreadyExists.id);

        const generateRefreshToken = new GenerateRefreshToken();
        const refreshToken = await generateRefreshToken.handle(userAlreadyExists.id);
        return res.json({token, refreshToken});

    }
}

export { UserAuthenticate }
