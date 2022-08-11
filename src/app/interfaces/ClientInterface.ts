import { Types } from 'mongoose'

export interface IClient {
  name: string
  cpf: string,
  birthday: string | Date,
  email: string,
  password: string,
  cep: string,
  uf: string,
  city: string,
  address: string,
  number: string,
  complement: string,
  neighborhood: string,
  _id?: Types.ObjectId;





}