import { ICategoriesRepository } from "../repositories/ICategoriesRepository"

interface IRequest {
  name: string,
  desc: string
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {

  }

  execute({ name, desc }: IRequest): void {
    const specificationAlreadyExxists = this.categoriesRepository.findByName(name)

    if(specificationAlreadyExxists) {
      throw new Error('Specification already exists.')
    }

    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if(categoryAlreadyExists) {
      throw new Error('Category already exists')
    }
  
   this.categoriesRepository.create( { name, desc } )
  }
}

export { CreateCategoryService }