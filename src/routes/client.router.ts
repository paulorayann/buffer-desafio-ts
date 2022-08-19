import { Router } from 'express'
import ClientController from '../app/controller/ClientController'
import validateClient from '../app/validations/client/validateClient'
import validateClientUpdate from '../app/validations/client/validateClientUpdate'
import validateClientGet from '../app/validations/client/validateClientGet'
import validateId from '../app/validations/validateId'

const router = Router()

router.post('/api/v1/client',validateClient , ClientController.create)
router.get('/api/v1/client', validateClientGet, ClientController.findAll)
router.get('/api/v1/client/:id',validateId, validateClientGet, ClientController.findById)
router.delete('/api/v1/client/:id', validateId, ClientController.delete)
router.put('/api/v1/client/:id', validateId, validateClientUpdate, ClientController.update)

export default router