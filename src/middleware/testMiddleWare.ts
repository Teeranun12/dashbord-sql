import { NextFunction , Response ,Request  } from "express";


export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    // Custom auth logic
    console.log(' Custom auth logic ');
    next(); 
  }
  