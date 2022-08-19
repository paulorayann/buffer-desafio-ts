import { Schema, model, PaginateModel  } from 'mongoose'
import { IProduct } from '../interfaces/ProductInterface'
import mongoosePaginate from 'mongoose-paginate-v2'

const ProductSchema = new Schema<IProduct>({
  name: { type: String, trim: true, required: true },
  category: { type: String, trim: true, required: true },
  currency: { type: String, trim: true, required: true },
  price: { type: Number, trim: true, required: true },
  __v: { type: Number, select: false }
})

ProductSchema.plugin(mongoosePaginate)
const Product = model<IProduct, PaginateModel<IProduct>>('Product', ProductSchema)
export default Product
