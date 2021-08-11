import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase){}

  handle(req: Request, res: Response): Response {
    const { name, desc } = req.body
  
    this.createSpecificationUseCase.execute({ name, desc })
  
    return res.status(201).send()
  }
}

export { CreateSpecificationController }