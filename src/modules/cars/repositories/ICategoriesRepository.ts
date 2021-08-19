import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  desc: string
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  list(): Promise<Category[]>
  create({ name, desc }: ICreateCategoryDTO): Promise<void>
}

export { ICategoriesRepository, ICreateCategoryDTO }