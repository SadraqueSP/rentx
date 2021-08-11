import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"


interface IRequest {
  name: string,
  desc: string
}

class CreateSpecificationUseCase {

  constructor(private specificationsRepository: ISpecificationsRepository) {

  }

  execute({ name, desc }: IRequest): void {
    this.specificationsRepository.create({ name, desc })
  }
}

export { CreateSpecificationUseCase }