import { Router } from 'express';
import SaleController from '../app/controller/SaleController';

const router = Router()

router.post('/api/v1/sale', SaleController.create)
router.get('/api/v1/sale', SaleController.findAll)
router.get('/api/v1/sale/:id', SaleController.findById)
router.delete('/api/v1/sale/:id', SaleController.delete)
router.put('/api/v1/sale/:id', SaleController.update)

export default router