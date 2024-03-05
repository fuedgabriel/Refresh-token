import { Request, Response } from 'express';
import { client } from '../../prisma/client';
import { ApiError } from '../../helpers/api-erros';
import { GenerateTokenProvider } from '../../provider/generateTokenProvider';
import dayjs from 'dayjs';
import { GenerateRefreshToken } from '../../provider/generateRefreshToken';

//refreshToken para token de autenticação

class RefreshToken{
    async handle(req: Request, res: Response){
        const { refreshToken } = req.body;
        const tokenRefresh = await client.refreshToken.findUnique({
            where: {
                id: refreshToken
            }
        });
        if(!tokenRefresh){
            throw new ApiError('Refresh Token invalid', 401);
        }
        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(tokenRefresh.userId);

        //verifica se o token está expiraado
        const refreshTokenExpired = dayjs().isAfter(dayjs.unix(tokenRefresh.expiresIn));
        if(refreshTokenExpired){
            const deleteRefreshToken = await client.refreshToken.deleteMany({
                where: {
                    userId: tokenRefresh.userId
                }
            });
            const generateRefreshTokenProvider = new GenerateRefreshToken();
            const newRefreshToken = await generateRefreshTokenProvider.handle(tokenRefresh.userId);
            return res.json({token, refreshToken: newRefreshToken});
        }

        return res.json({token});
    }
}

export { RefreshToken }