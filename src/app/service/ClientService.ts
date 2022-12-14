import { IClient } from '../interfaces/ClientInterface';
import ClientRepository from '../repository/ClientRepository';
import SearchCEP from '../repository/SearchCEP';
import NotFound from '../errors/NotFound';

class ClientService {
  async create(payload: IClient): Promise<IClient> {
    const cep = await SearchCEP.getCEP(payload.cep);
    payload.address = cep.logradouro;
    payload.neighborhood = cep.bairro;
    payload.complement = cep.complemento;
    payload.city = cep.localidade;
    payload.uf = cep.uf;

    const result = await ClientRepository.create(payload);
    return result;
  }

  async findAll(payload): Promise<IClient[]> {
    const result = (await ClientRepository.findAll(payload)) as IClient[];
    return result;
  }

  async findById(id: string): Promise<IClient> {
    const result = (await ClientRepository.findById(id)) as IClient;
    if (!result) {
      throw new NotFound(`Client ID ${id}`);
    }
    return result;
  }

  async delete(id: string): Promise<IClient> {
    const result = (await ClientRepository.delete(id)) as IClient;
    if (!result) {
      throw new NotFound(`Client ID ${id}`);
    }
    return result;
  }

  async update(id: string, payload: IClient): Promise<IClient> {
    const cep = await SearchCEP.getCEP(payload.cep);
    payload.address = cep.logradouro;
    payload.neighborhood = cep.bairro;
    payload.complement = cep.complemento;
    payload.city = cep.localidade;
    payload.uf = cep.uf;

    const result = (await ClientRepository.update(id, payload)) as IClient;
    if (!result) {
      throw new NotFound(`Client ID ${id}`);
    }
    return result;
  }
}

export default new ClientService();
