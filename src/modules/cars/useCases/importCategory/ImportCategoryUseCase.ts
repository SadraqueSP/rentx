import fs from 'fs'
import csvParse from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

interface IImportCategory {
  name: string
  desc: string
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository){}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategory[] = []
  
      const parseFile = csvParse()
  
      stream.pipe(parseFile)
  
      parseFile.on('data', async (line) => {
        const [ name, desc ] = line
        categories.push({
          name,
          desc
        })
      })
      .on('end', () => {
        fs.promises.unlink(file.path)
        resolve(categories)
      })
      .on('error', (err) => {
        reject(err)
      })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)
    console.log(categories)

    categories.map( async category => {
      const { name, desc } = category

      const existCategory = await this.categoriesRepository.findByName(name)

      if(!existCategory) {
        this.categoriesRepository.create({
          name, desc
        })
      }

    })
  }
}

export { ImportCategoryUseCase }