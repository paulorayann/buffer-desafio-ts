import { Router } from 'express';
import ClientController from '../app/controller/ClientController';

const router = Router()

router.post('/api/v1/client', ClientController.create)

export default router