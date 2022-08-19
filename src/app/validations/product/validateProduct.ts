import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const client = Joi.object({
      name: Joi.string().trim().required(),
      category: Joi.string().trim().required(),
      currency: Joi.string().trim().required(),
      price: Joi.number().required()
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
