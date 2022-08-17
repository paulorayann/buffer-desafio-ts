import { ISale } from "../interfaces/SaleInterface";
import SaleRepository from "../repository/SaleRepository";
import ClientRepository from "../repository/ClientRepository";

class SaleService {
  async create( payload: ISale): Promise<ISale> {
    const validClient = await ClientRepository.findById(payload.client.toString())
    if (!validClient) {
      throw new Error('Client not found')
    }

    const result = await SaleRepository.create(payload)
    return result
  }

  async findAll(): Promise<ISale[]> {
    const result = (await SaleRepository.findAll()) as ISale[]
    return result
  }

  async findById(id: string): Promise<ISale> {
    const result = await SaleRepository.findById(id) as ISale
    return result
  }

  async delete(id: string): Promise<ISale> {
    const result = (await SaleRepository.delete(id)) as ISale
    return result
  }

  async update(id: string, payload: Request): Promise<ISale> {
    const result = (await SaleRepository.update(id, payload)) as ISale
    return result
  }
}

export default new SaleService()