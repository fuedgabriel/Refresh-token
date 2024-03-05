import { ApiError } from "../helpers/api-erros";

require('express-async-errors');


export const errorMiddleware = async (
  err: Error & Partial<ApiError>,
  res,
  req,
  next
) => {
  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? "Internal Server Error";
  // err.stack = null;
  next(err);
}


// export const errorMiddleware = async (
//   error: Error & Partial<ApiError>, 
//   res: Response, 
//   req: Request, 
//   next: NextFunction
//   ) => {
//     console.log("Middle Error");
//     const statusCode = error.status ?? 500;
//     const message = error.status ? error.message : "Internal Server Error";
//     return res.status(statusCode).json({message});
//   };

