import { Router } from 'express'
import ClientController from '../app/controller/ClientController'
import validateClient from '../app/validations/client/validateClient'
import validateClientUpdate from '../app/validations/client/validateClientUpdate'

const router = Router()

router.post('/api/v1/client',validateClient , ClientController.create)
router.get('/api/v1/client', ClientController.findAll)
router.get('/api/v1/client/:id', ClientController.findById)
router.delete('/api/v1/client/:id', ClientController.delete)
router.put('/api/v1/client/:id', validateClientUpdate, ClientController.update)

export default router