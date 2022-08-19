import { Types } from 'mongoose';

export interface IProduct {
  name: string;
  category: string;
  currency: string;
  price: number;
  _id?: Types.ObjectId;
  __v?: number;
}
