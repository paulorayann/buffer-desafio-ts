import { Types } from 'mongoose'

export interface ISale {
  client: Types.ObjectId,
  clientCurrency: string,
  date: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  items: Object[],
  product: Types.ObjectId,
  total: number,
  totalClient: number,
  _id?: Types.ObjectId;
}