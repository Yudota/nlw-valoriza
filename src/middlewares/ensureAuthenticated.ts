import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Receber o token
    const authToken = request.headers.authorization;

    // Validar se o token tá preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    // Validar o token
    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "e4e622b953d7146e0fc8c08e3f4a1e79") as IPayload;

        request.user_id = sub;
    }
    catch (err) {
        return response.status(401).end();
    }

    // Recuperar informações do usuário


    return next();
}