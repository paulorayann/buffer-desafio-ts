import { IClient } from "../interfaces/ClientInterface";
import ClientSchema from '../schema/ClientSchema'

class ClientRepository {
  async create(payload: IClient): Promise<IClient> {
    return ClientSchema.create(payload)
  }
}

export default new ClientRepository