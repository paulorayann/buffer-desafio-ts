import mongoose, { Schema } from 'mongoose'
import { IProduct } from '../interfaces/ProductInterface'


const ProductSchema = new Schema<IProduct>({
  name: { type: String, trim: true, required: true },
  category: { type: String, trim: true, required: true },
  currency: { type: String, trim: true, required: true },
  price: { type: String, trim: true, required: true },
})


const Product = mongoose.model<IProduct>('Product', ProductSchema)
export default Product
