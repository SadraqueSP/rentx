import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string
  desc: string
}


interface ISpecificationsRepository {
  create({ name, desc }: ICreateSpecificationDTO): void
  findByName(name: string): Specification
}

export { ISpecificationsRepository, ICreateSpecificationDTO }