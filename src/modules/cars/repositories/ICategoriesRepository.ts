import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  desc: string
}

interface ICategoriesRepository {
  findByName(name: string): Category
  list(): Category[]
  create({ name, desc }: ICreateCategoryDTO): void
}

export { ICategoriesRepository, ICreateCategoryDTO }