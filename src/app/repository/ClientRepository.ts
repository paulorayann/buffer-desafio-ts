import { IClient } from "../interfaces/ClientInterface";
import ClientSchema from '../schema/ClientSchema'

class ClientRepository {
  async create(payload: IClient): Promise<IClient> {
    return ClientSchema.create(payload)
  }

  async findAll(payload): Promise<IClient[]> {
    const { limit = 15, page = 0, ...query } = payload
    const customLabels = {
      totalDocs: 'totalCount',
      docs: 'clients',
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
    return ClientSchema.paginate(query, options) as never as IClient[]
  }

  async findById(id: string): Promise<IClient> {
    const result = await ClientSchema.findById(id) as IClient
    return result

  }

  async delete(id: string): Promise<IClient> {
    const result = (await ClientSchema.findByIdAndDelete(id)) as IClient
    return result
  }

  async update(id: string, payload: Request): Promise<IClient> {
    const result = (await ClientSchema.findByIdAndUpdate(id, payload, {returnOriginal: false})) as IClient
    return result
  }
}

export default new ClientRepository