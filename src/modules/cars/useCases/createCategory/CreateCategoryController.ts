import { Request, Response } from 'express'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase){}

  handle(req: Request, res: Response): Response {
    const { name, desc } = req.body;
  
    this.createCategoryUseCase.execute({ name, desc })
    
    return res.status(201).send();
  }
}

export { CreateCategoryController }