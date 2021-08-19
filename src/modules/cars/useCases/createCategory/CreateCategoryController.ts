import { Request, Response } from 'express'

import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase){}
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, desc } = req.body;
  
    await this.createCategoryUseCase.execute({ name, desc })
    
    return res.status(201).send();
  }
}

export { CreateCategoryController }