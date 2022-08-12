import { IClient } from "../interfaces/ClientInterface"
import ClientRepository from "../repository/ClientRepository"

class ClientService {
  async create(payload: IClient): Promise<IClient> {
    const result = await ClientRepository.create(payload)
    return result
  }

  async findAll(): Promise<IClient[]> {
    const result = (await ClientRepository.findAll()) as IClient[]
    return result
  }

  async findById(id: string): Promise<IClient> {
    const result = await ClientRepository.findById(id) as IClient
    return result
  }

  async delete(id: string): Promise<IClient> {
    const result = (await ClientRepository.delete(id)) as IClient
    return result
  }

  async update(id: string, payload: Request): Promise<IClient> {
    const result = (await ClientRepository.update(id, payload)) as IClient
    return result
  }
}

export default new ClientService()