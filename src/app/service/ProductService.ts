import { IProduct } from '../interfaces/ProductInterface';
import ProductRepository from '../repository/ProductRepository';
import NotFound from '../errors/NotFound';

class ProductService {
  async create(payload: IProduct): Promise<IProduct> {
    const result = await ProductRepository.create(payload);
    return result;
  }

  async findAll(payload): Promise<IProduct[]> {
    const result = (await ProductRepository.findAll(payload)) as IProduct[];
    return result;
  }

  async findById(id: string): Promise<IProduct> {
    const result = (await ProductRepository.findById(id)) as IProduct;
    if (!result) {
      throw new NotFound(`Client ID ${id}`);
    }
    return result;
  }

  async delete(id: string): Promise<IProduct> {
    const result = (await ProductRepository.delete(id)) as IProduct;
    if (!result) {
      throw new NotFound(`Client ID ${id}`);
    }
    return result;
  }

  async update(id: string, payload: IProduct): Promise<IProduct> {
    const result = (await ProductRepository.update(id, payload)) as IProduct;
    if (!result) {
      throw new NotFound(`Client ID ${id}`);
    }
    return result;
  }
}

export default new ProductService();
