import { Router } from 'express';
import ProductController from '../app/controller/ProductController';
import validateProduct from '../app/validations/product/validateProduct';
import validateProductUpdate from '../app/validations/product/validateProductUpdate';
import validateProductGet from '../app/validations/product/validateProductGet';
import validateId from '../app/validations/validateId';

const router = Router();

router.post('/api/v1/product', validateProduct, ProductController.create);
router.get('/api/v1/product', validateProductGet, ProductController.findAll);
router.get('/api/v1/product/:id', validateId, validateProductGet, ProductController.findById);
router.delete('/api/v1/product/:id', validateId, ProductController.delete);
router.put('/api/v1/product/:id', validateId, validateProductUpdate, ProductController.update);

export default router;
