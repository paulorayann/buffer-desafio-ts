import { Request, Response, NextFunction } from 'express';
import JoiImport from 'joi';
import DateExtension from '@joi/date';
import { objectId } from '../../utils/regex';
import { invalidObjectIdMessage } from '../../utils/customMessages';

const Joi = JoiImport.extend(DateExtension) as typeof JoiImport;

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const client = Joi.object({
      client: Joi.string().regex(objectId).message(invalidObjectIdMessage).trim().required(),
      clientCurrency: Joi.string().trim().required(),
      date: Joi.date().format('DD/MM/YYYY').required(),
      items: Joi.array()
        .items(
          Joi.object({
            product: Joi.string().regex(objectId).message(invalidObjectIdMessage).trim().required(),
            qtd: Joi.number().required(),
            unitValue: Joi.number().required()
          })
        )
        .required(),
      total: Joi.number(),
      totalClient: Joi.number()
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
