import { client } from "../prisma/client";
import dayjs from 'dayjs';

//gera o token refresh da autenticação

class GenerateRefreshToken {
  async handle(userId: string) {

    const expiresIn = dayjs().add(15, 'second').unix();
    const GenerateRefreshToken = await client.refreshToken.create({
        data: {
            userId,
            expiresIn
        }
    });

    return GenerateRefreshToken;
  }
}

export { GenerateRefreshToken }