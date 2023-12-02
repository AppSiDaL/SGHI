import { ErrorRequestHandler, Request } from "express";

export interface CustonRequest extends Request {
  token?: string;
  user?: string;
}
export interface CustomError extends ErrorRequestHandler {
  message?: string;
}
