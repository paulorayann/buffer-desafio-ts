import { Request, Response, NextFunction } from 'express'
import JoiImport from 'joi'
import DateExtension from '@joi/date'
import {cpfValid}  from '../../utils/regex'
import { cepValid } from '../../utils/regex'

const Joi = JoiImport.extend(DateExtension) as typeof JoiImport

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const client = Joi.object({
      name: Joi.string().trim(),
      cpf: Joi.string()
      .trim()
      .min(14)
      .max(14)
      .regex(cpfValid)
      .message('The CPF field has an invalid format, please try XXX.XXX.XXX-XX and use numbers only'),
      birthday: Joi.date().format('DD/MM/YYYY'),
      email: Joi.string().email().trim(),
      password: Joi.string().trim().min(6),
      cep: Joi.string().trim().regex(cepValid).message('The CEP field has an invalid format, please try XXXXX-XXX'),
      uf: Joi.string(),
      city: Joi.string(),
      address: Joi.string(),
      number: Joi.number(),
      complement: Joi.string(),
      neighborhood: Joi.string(),
    });

    const { error } = await client.validate(req.query, {abortEarly: false})

    if (error) throw error

    return next();
  } catch (error) {
    return res.status(400).json({
      errors: error.details.map((detail) => ({
        name: detail.path.join('.'),
        description: detail.message
      }))
    })
  }
}