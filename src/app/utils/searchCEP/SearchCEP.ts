import axios from 'axios';
import { IClient } from 'app/interfaces/ClientInterface';

class SearchCEP {
  async getCEP(cep:string): Promise<IClient> {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return response.data
  }
}

export default new SearchCEP()