import axios from 'axios';

class CurrencyValue {
  async getCurrencyValue(currency: string, clientCurrency: string): Promise<number> {
    const response = await axios.get(`https://economia.awesomeapi.com.br/${currency}-${clientCurrency}`);
    return response.data;
  }
}

export default new CurrencyValue();
