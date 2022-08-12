import { Types } from 'mongoose'

export interface IProduct {
  name: string,
  category: string,
  currency: string,
  price: string,
  _id?: Types.ObjectId;
}