import { Request, Response, NextFunction } from "express";

export const validateData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};
