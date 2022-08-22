import { Request, Response, NextFunction } from 'express';
import JoiImport from 'joi';
import DateExtension from '@joi/date';
import { objectId } from '../../utils/regex';
import { invalidObjectIdMessage } from '../../utils/customMessages';

const Joi = JoiImport.extend(DateExtension) as typeof JoiImport;

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const client = Joi.object({
      client: Joi.string().regex(objectId).message(invalidObjectIdMessage).trim(),
      clientCurrency: Joi.string().trim(),
      date: Joi.date().format('DD/MM/YYYY'),
      items: Joi.array().items(
        Joi.object({
          product: Joi.string().regex(objectId).message(invalidObjectIdMessage).trim(),
          qtd: Joi.number(),
          unitValue: Joi.number()
        })
      ),
      total: Joi.number(),
      totalClient: Joi.number()
    });

    const { error } = await client.validate(req.query, { abortEarly: false });

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
