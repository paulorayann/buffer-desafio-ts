import { Schema, model, PaginateModel  } from 'mongoose'
import { IClient } from '../interfaces/ClientInterface'
import mongoosePaginate from 'mongoose-paginate-v2'
import bcryptjs from 'bcryptjs'

const clientSchema = new Schema<IClient>({
  name: { type: String, trim: true, required: true },
  cpf: { type: String, trim: true, required: true },
  birthday: { type: Date, trim: true, unique:true, required: true },
  email: { type: String, lowercase: true, trim: true, unique: true, required: true},
  password: { type: String, required: true, select: false},
  cep: { type: String, trim: true, required: true },
  uf: { type: String },
  city: { type: String },
  address: { type: String, },
  number: { type: String, trim: true, required: true },
  complement: { type: String },
  neighborhood: { type: String },
  __v: { type: Number, select: false }
})

clientSchema.pre('save', async function pass(next){
  const hash = await bcryptjs.hash(this.password, 10)
  this.password = hash
  next()
})

clientSchema.plugin(mongoosePaginate)
const Client = model<IClient, PaginateModel<IClient>>('Client', clientSchema)
export default Client
