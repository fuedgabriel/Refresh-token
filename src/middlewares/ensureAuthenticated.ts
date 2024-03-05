import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { ApiError } from '../helpers/api-erros';

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new ApiError('token is missing', 401);
  }

  const [, token] = authToken.split(' ');
  try {
    verify(token, '4271bc5b-4c53-4c27-9f7c-ea661250395b');
    return next();
  } catch (error) {
    throw new ApiError('Invalid token', 401);
  }
}