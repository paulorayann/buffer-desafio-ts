import {ISale} from '../interfaces/SaleInterface'
import mongoose, { Schema } from 'mongoose'



const SaleSchema = new Schema<ISale>({
  client: { type: Schema.Types.ObjectId, trim: true, required: true, ref: 'Client' },
  clientCurrency: { type: String, trim: true, required: true },
  date: { type: Date, trim: true, required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, trim: true, required: true, ref: 'Product' },
      qtd: { type: Number, trim: true, required: true },
      unitValue: { type: Number, trim: true, required: true },
      _id: false
    },
  ],
  total: { type: Number },
  totalClient: { type: Number },
})


const Sale = mongoose.model<ISale>('Sale', SaleSchema)
export default Sale
