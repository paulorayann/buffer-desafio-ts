import mongoose, { Schema } from 'mongoose'
import { IClient } from '../interfaces/ClientInterface'
import bcryptjs from 'bcryptjs'


const clientSchema = new Schema<IClient>({
  name: { type: String, trim: true, required: true },
  cpf: { type: String, trim: true, required: true },
  birthday: { type: Date, trim: true, required: true },
  email: { type: String, lowercase: true, trim: true, required: true},
  password: { type: String, required: true, select: false},
  cep: { type: String, trim: true, required: true },
  uf: { type: String },
  city: { type: String },
  address: { type: String, },
  number: { type: String, trim: true, required: true },
  complement: { type: String },
  neighborhood: { type: String },
})

clientSchema.pre('save', async function pass(next){
  const hash = await bcryptjs.hash(this.password, 10)
  this.password = hash
  next()
})
const Client = mongoose.model<IClient>('Client', clientSchema)
export default Client
