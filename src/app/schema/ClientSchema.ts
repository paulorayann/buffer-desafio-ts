import mongoose, { Schema } from 'mongoose'
import { IClient } from '../interfaces/ClientInterface'

const clientSchema = new Schema<IClient>({
  name: { type: String, required: true },
  cpf: { type: String, required: true },
  birthday: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cep: { type: String, required: true },
})

const Client = mongoose.model<IClient>('User', clientSchema)
export default Client
