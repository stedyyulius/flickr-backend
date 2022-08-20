import { Response } from 'express';

export const handle_error = (error: any, res: Response) => {
  
  console.log(error);

  res.status(400).send(error.toString());
};
