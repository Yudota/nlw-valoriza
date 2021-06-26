import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateUserRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateUserRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        // Verificar se a senha está correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        // Gerar token
        const token = sign(
            {
                email: user.email
            },
            "e4e622b953d7146e0fc8c08e3f4a1e79",
            {
                subject: user.id,
                expiresIn: "1d"
            });

        return token;
    }

}

export { AuthenticateUserService };