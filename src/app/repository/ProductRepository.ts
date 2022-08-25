import { IProduct } from '../interfaces/ProductInterface';
import ProductSchema from '../schema/ProductSchema';

class ProductRepository {
  async create(payload: IProduct): Promise<IProduct> {
    const result = await ProductSchema.create(payload);
    return result;
  }

  async findAll(payload): Promise<IProduct[]> {
    const { limit = 15, page = 0, ...query } = payload;
    const customLabels = {
      totalDocs: 'totalCount',
      docs: 'products',
      page: 'currentPage',
      limit: 'pageSize',
      nextPage: false,
      prevPage: false,
      totalPages: 'totalPages',
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false
    };
    const options = {
      page: Number(page),
      limit: Number(limit),
      customLabels
    };
    const result = (await ProductSchema.paginate(query, options)) as never as IProduct[];
    return result;
  }

  async findById(id: string): Promise<IProduct> {
    const result = (await ProductSchema.findById(id)) as IProduct;
    return result;
  }

  async delete(id: string): Promise<IProduct> {
    const result = (await ProductSchema.findByIdAndDelete(id)) as IProduct;
    return result;
  }

  async update(id: string, payload: IProduct): Promise<IProduct> {
    const result = (await ProductSchema.findByIdAndUpdate(id, payload, { returnOriginal: false })) as IProduct;
    return result;
  }
}

export default new ProductRepository();
