import { ISale } from "../interfaces/SaleInterface";
import SaleSchema from '../schema/SaleSchema'

class SaleRepository {
  async create(payload: ISale): Promise<ISale> {
    return SaleSchema.create(payload)
  }

  async findAll(): Promise<ISale[]> {
    const result = (await SaleSchema.find()) as ISale[]
    return result
  }

  async findById(id: string): Promise<ISale> {
    const result = await SaleSchema.findById(id) as ISale
    return result

  }

  async delete(id: string): Promise<ISale> {
    const result = (await SaleSchema.findByIdAndDelete(id)) as ISale
    return result
  }

  async update(id: string, payload: Request): Promise<ISale> {
    const result = (await SaleSchema.findByIdAndUpdate(id, payload, {returnOriginal: false})) as ISale
    return result
  }
}

export default new SaleRepository