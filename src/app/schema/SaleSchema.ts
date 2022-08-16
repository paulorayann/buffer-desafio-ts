import mongoose, { Schema } from 'mongoose'
import {ISale} from '../interfaces/SaleInterface'


const SaleSchema = new Schema<ISale>({
  client: { type: Schema.Types.ObjectId, required: true, ref: 'Client._id' },
  clientCurrency: { type: String, required: true },
  date: { type: String, required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, required: true, ref: 'Product._id' },
      qtd: { type: Number, required: true },
      unitValue: { type: Number, required: true },
      _id: false
    },
  ],
  total: { type: Number },
  totalClient: { type: Number},
})


const Sale = mongoose.model<ISale>('Sale', SaleSchema)
export default Sale
