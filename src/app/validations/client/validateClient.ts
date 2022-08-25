import { Request, Response, NextFunction } from 'express';
import JoiImport from 'joi';
import DateExtension from '@joi/date';
import cpfValidation from '../../utils/cpfValidation';
import { cpfValid } from '../../utils/regex';
import { cepValid } from '../../utils/regex';
import { invalidCpfMessage } from '../../utils/customMessages';
import { invalidCepMessage } from '../../utils/customMessages';

const Joi = JoiImport.extend(DateExtension) as typeof JoiImport;

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const client = Joi.object({
      name: Joi.string().trim().required(),
      cpf: Joi.string()
        .trim()
        .min(11)
        .max(14)
        .regex(cpfValid)
        .message(invalidCpfMessage)
        .custom((cpf) => {
          if (!cpfValidation(cpf)) throw Error('Please enter a valid CPF');
          return req.body;
        })
        .required(),
      birthday: Joi.date().format('DD/MM/YYYY').required(),
      email: Joi.string().email().trim().required(),
      password: Joi.string().trim().min(6).required(),
      cep: Joi.string().trim().regex(cepValid).message(invalidCepMessage).required(),
      uf: Joi.string().trim(),
      city: Joi.string().trim(),
      address: Joi.string().trim(),
      number: Joi.number().required(),
      complement: Joi.string().trim(),
      neighborhood: Joi.string().trim()
    });

    const { error } = await client.validate(req.body, { abortEarly: false });

    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json({
      errors: error.details.map((detail) => ({
        name: detail.path.join('.'),
        description: detail.message
      }))
    });
  }
};
