import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'
import {objectId}  from '../utils/regex'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Joi.object({
      id: Joi.string().regex(objectId).message('Please enter a valid ID').required()
    });

    const { error } = await id.validate(req.params, {abortEarly: false})

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