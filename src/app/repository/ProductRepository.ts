import { IProduct } from "../interfaces/ProductInterface";
import ProductSchema from '../schema/ProductSchema'

class ClientRepository {
  async create(payload: IProduct): Promise<IProduct> {
    return ProductSchema.create(payload)
  }

  async findAll(): Promise<IProduct[]> {
    const result = (await ProductSchema.find()) as IProduct[]
    return result
  }

  async findById(id: string): Promise<IProduct> {
    const result = await ProductSchema.findById(id) as IProduct
    return result

  }

  async delete(id: string): Promise<IProduct> {
    const result = (await ProductSchema.findByIdAndDelete(id)) as IProduct
    return result
  }

  async update(id: string, payload: Request): Promise<IProduct> {
    const result = (await ProductSchema.findByIdAndUpdate(id, payload, {returnOriginal: false})) as IProduct
    return result
  }
}

export default new ClientRepository