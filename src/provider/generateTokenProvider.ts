import { sign } from "jsonwebtoken";


//gera o token de autenticação

class GenerateTokenProvider {
    async execute(userId: string){
        const token = sign({}, "4271bc5b-4c53-4c27-9f7c-ea661250395b",{
            subject: userId,
            expiresIn: '10s'
        });
        return token;
    }
}
export { GenerateTokenProvider }