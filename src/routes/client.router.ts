import { Router } from 'express';
import ClientController from '../app/controller/ClientController';

const router = Router()

router.post('/api/v1/client', ClientController.create)
router.get('/api/v1/client/:id', ClientController.findById)
router.delete('/api/v1/client/:id', ClientController.delete)
router.put('/api/v1/client/:id', ClientController.update)

export default router