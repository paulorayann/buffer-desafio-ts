import { Types } from 'mongoose';

export interface ISale {
  client: Types.ObjectId;
  clientCurrency: string;
  date: Date;
  items: [
    {
      product: Types.ObjectId;
      qtd: number;
      unitValue: number;
    }
  ];
  product: Types.ObjectId;
  total: number;
  totalClient: number;
  _id?: Types.ObjectId;
  __v?: number;
}
