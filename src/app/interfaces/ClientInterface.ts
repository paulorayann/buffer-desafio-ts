import { Types } from 'mongoose'

export interface IClient {
  name: string
  cpf: string,
  birthday: Date,
  email: string,
  password: string,
  cep: string,
  uf: string,
  city: string,
  address: string,
  number: string,
  complement: string,
  neighborhood: string,
  logradouro: string,
  bairro: string,
  complemento: string,
  localidade: string,
  _id?: Types.ObjectId;
  __v?: number;
}