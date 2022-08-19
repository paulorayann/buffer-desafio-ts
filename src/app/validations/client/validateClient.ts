import { Request, Response, NextFunction } from 'express'
import JoiImport from 'joi'
import DateExtension from '@joi/date'
import cpfValidation from '../../utils/cpfValidation'
import {cpfValid}  from '../../utils/regex'
import { cepValid } from '../../utils/regex'

const Joi = JoiImport.extend(DateExtension) as typeof JoiImport

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const client = Joi.object({
      name: Joi.string().trim().required(),
      cpf: Joi.string()
      .trim()
      .min(14)
      .max(14)
      .regex(cpfValid)
      .message('The CPF field has an invalid format, please try XXX.XXX.XXX-XX and use numbers only')
      .custom((cpf) => {
        if (!cpfValidation(cpf)) throw Error('Please enter a valid CPF')
        return req.body
      })
      .required(),
      birthday: Joi.date().format('DD/MM/YYYY').required(),
      email: Joi.string().email().trim().required(),
      password: Joi.string().trim().min(6).required(),
      cep: Joi.string().trim().regex(cepValid).message('The CEP field has an invalid format, please try XXXXX-XXX').required(),
      uf: Joi.string(),
      city: Joi.string(),
      address: Joi.string(),
      number: Joi.number().required(),
      complement: Joi.string(),
      neighborhood: Joi.string(),
    });

    const { error } = await client.validate(req.body, {abortEarly: false})

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