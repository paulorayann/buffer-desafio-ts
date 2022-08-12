import mongoose, { Schema } from 'mongoose'
import { IProduct } from '../interfaces/ProductInterface'

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  currency: { type: String, required: true },
  price: { type: String, required: true },
})

const Product = mongoose.model<IProduct>('Product', ProductSchema)
export default Product
