import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const client = Joi.object({
      name: Joi.string().trim(),
      category: Joi.string().trim(),
      currency: Joi.string().trim(),
      price: Joi.number(),

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