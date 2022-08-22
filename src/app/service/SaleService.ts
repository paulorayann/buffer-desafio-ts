import { ISale } from '../interfaces/SaleInterface';
import SaleRepository from '../repository/SaleRepository';
import ClientRepository from '../repository/ClientRepository';
import ProductRepository from '../repository/ProductRepository';
import CurrencyValue from '../repository/CurrencyValue';
import NotFound from '../errors/NotFound';

class SaleService {
  async create(payload: ISale): Promise<ISale> {
    const validClient = await ClientRepository.findById(payload.client as unknown as string);
    if (!validClient) {
      throw new NotFound(`Client ID ${payload.client}`);
    }

    const validProduct = await ProductRepository.findById(payload.items[0].product as unknown as string);
    if (!validProduct) {
      throw new NotFound(`Product ID '${payload.items[0].product}`);
    }

    payload.total = payload.items
      .reduce((totalPrice, products) => totalPrice + products.unitValue * products.qtd, 0)
      .toFixed(2) as unknown as number;

    const productCurrency = await CurrencyValue.getCurrencyValue(validProduct.currency, payload.clientCurrency);
    payload.totalClient = (payload.total * productCurrency[0].ask).toFixed(2) as unknown as number;

    const result = await SaleRepository.create(payload);
    return result;
  }

  async findAll(payload): Promise<ISale[]> {
    const result = (await SaleRepository.findAll(payload)) as ISale[];
    return result;
  }

  async findById(id: string): Promise<ISale> {
    const result = (await SaleRepository.findById(id)) as ISale;
    if (!result) {
      throw new NotFound(id);
    }
    return result;
  }

  async delete(id: string): Promise<ISale> {
    const result = (await SaleRepository.delete(id)) as ISale;
    if (!result) {
      throw new NotFound(id);
    }
    return result;
  }

  async update(id: string, payload: ISale): Promise<ISale> {
    const validClient = await ClientRepository.findById(payload.client as unknown as string);
    if (!validClient) {
      throw new NotFound(`Client ID ${payload.client}`);
    }

    const validProduct = await ProductRepository.findById(payload.items[0].product as unknown as string);
    if (!validProduct) {
      throw new NotFound(`Product ID '${payload.items[0].product}`);
    }

    payload.total = payload.items
      .reduce((totalPrice, products) => totalPrice + products.unitValue * products.qtd, 0)
      .toFixed(2) as unknown as number;

    const productCurrency = await CurrencyValue.getCurrencyValue(validProduct.currency, payload.clientCurrency);
    payload.totalClient = (payload.total * productCurrency[0].ask).toFixed(2) as unknown as number;

    const result = await SaleRepository.update(id, payload);
    return result;
  }
}

export default new SaleService();
