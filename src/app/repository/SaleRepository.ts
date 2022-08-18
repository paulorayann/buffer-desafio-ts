import { ISale } from "../interfaces/SaleInterface";
import SaleSchema from '../schema/SaleSchema'

class SaleRepository {
  async create(payload: ISale): Promise<ISale> {
    return SaleSchema.create(payload)
  }

  async findAll(payload): Promise<ISale[]> {
    const { limit = 15, page = 0, ...query } = payload
    const customLabels = {
      totalDocs: 'totalCount',
      docs: 'sales',
      page: 'currentPage',
      limit: 'pageSize',
      nextPage: false,
      prevPage: false,
      totalPages: 'totalPages',
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false
    }
    const options = {
      page: Number(page),
      limit: Number(limit),
      customLabels,
    }
    return SaleSchema.paginate(query, options) as never as ISale[]
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