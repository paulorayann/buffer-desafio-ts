import { IClient } from "../interfaces/ClientInterface"
import ClientRepository from "../repository/ClientRepository"

class ClientService {
  async create(payload: IClient): Promise<IClient> {
    const result = await ClientRepository.create(payload)
    return result
  }
}

export default new ClientService()