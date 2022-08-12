import { IClient } from "../interfaces/ClientInterface";
import ClientSchema from '../schema/ClientSchema'

class ClientRepository {
  async create(payload: IClient): Promise<IClient> {
    return ClientSchema.create(payload)
  }

  async findAll(): Promise<IClient[]> {
    const result = (await ClientSchema.find()) as IClient[]
    return result
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