import { Router } from 'express';
import SaleController from '../app/controller/SaleController';
import validateSale from '../app/validations/sale/validateSale';
import validateSaleUpdate from '../app/validations/sale/validateSaleUpdate';
import validateSaleGet from '../app/validations/sale/validateSaleGet';
import validateId from '../app/validations/validateId';

const router = Router();

router.post('/api/v1/sale', validateSale, SaleController.create);
router.get('/api/v1/sale', validateSaleGet, SaleController.findAll);
router.get('/api/v1/sale/:id', validateId, validateSaleGet, SaleController.findById);
router.delete('/api/v1/sale/:id', validateId, SaleController.delete);
router.put('/api/v1/sale/:id', validateId, validateSaleUpdate, SaleController.update);

export default router;
