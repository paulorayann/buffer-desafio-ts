import { IProduct } from "../interfaces/ProductInterface";
import ProductRepository from "../repository/ProductRepository";

class ProductService {
  async create(payload: IProduct): Promise<IProduct> {
    const result = await ProductRepository.create(payload)
    return result
  }

  async findAll(payload): Promise<IProduct[]> {
    const result = await ProductRepository.findAll(payload) as IProduct[]
    return result
  }

  async findById(id: string): Promise<IProduct> {
    const result = await ProductRepository.findById(id) as IProduct
    return result
  }

  async delete(id: string): Promise<IProduct> {
    const result = (await ProductRepository.delete(id)) as IProduct
    return result
  }

  async update(id: string, payload: Request): Promise<IProduct> {
    const result = (await ProductRepository.update(id, payload)) as IProduct
    return result
  }
}

export default new ProductService()