import { ISale } from "../interfaces/SaleInterface";
import SaleRepository from "../repository/SaleRepository";
import ClientRepository from "../repository/ClientRepository";
import ProductRepository from "../repository/ProductRepository";
import CurrencyValue from "../utils/currencyQuoteAPI/CurrencyValue";


class SaleService {
  async create( payload: ISale): Promise<ISale> {
    // Check if client exists
    const validClient = await ClientRepository.findById(payload.client as unknown as string)
    if (!validClient) {
      throw new Error(`Client Id '${payload.client}' not found`)
    }

    // Check if product exists
    const validProduct = await ProductRepository.findById(payload.items[0].product as unknown as string)
    if (!validProduct) {
      throw new Error(`Product Id '${payload.items[0].product}' not found`)
    }

    // Calculates the total price of the sale
      payload.total = payload.items.reduce((totalPrice, products) => totalPrice + products.unitValue * products.qtd, 0).toFixed(2) as unknown as number

    // Calculates the total price of the sale in the client currency
    const productCurrency = await CurrencyValue.getCurrencyValue(validProduct.currency, payload.clientCurrency)
    payload.totalClient = (payload.total * productCurrency[0].ask).toFixed(2) as unknown as number

    // Then create sale
    const result = await SaleRepository.create(payload)
    return result
  }

  async findAll(payload): Promise<ISale[]> {
    const result = (await SaleRepository.findAll(payload)) as ISale[]
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